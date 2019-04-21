using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TigerBlog.Models.Exception;
using TigerBlog.Models.Interface.Repository;
using TigerBlog.Models.Interface.Services;
using TigerBlog.Models.ViewModel;
using TigerBlog.Utilities;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace TigerBlog.Services
{
    public class AuthService : IAuthService
    {
        private readonly string _hashKey;
        private readonly string _secret;
        private readonly IUserRepository _userRepository;
        public AuthService(IUserRepository userRepository, IOptions<AppSettings> appSettings)
        {
            _userRepository = userRepository;
            _hashKey = appSettings.Value.HashKey;
            _secret = appSettings.Value.APISecret;
        }
        public async Task<string> AuthenticateAsync(string username, string password)
        {
            if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password))
                throw new ArgumentNullException("empty user name or password");

            User user = await _userRepository.GetByUserNameAsync(username);

            if (user == null)
                throw new AuthException($"User {username} Not Found");

            if (!PasswordHelper.VerifyPasswordHash(password, _hashKey, user.Password))
                throw new AuthException("Incorrect Password, Try Again");

            return CreateToken(user);
        }

        // JWT token auth http://jasonwatmore.com/post/2018/08/14/aspnet-core-21-jwt-authentication-tutorial-with-example-api
        private string CreateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.UserId.ToString())
                }),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
