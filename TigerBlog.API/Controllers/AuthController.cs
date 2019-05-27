using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using TigerBlog.Models.Exception;
using TigerBlog.Models.Interface.Services;
using TigerBlog.Models.ViewModel;

namespace TigerBlog.API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userSevice;
        private readonly IAuthService _authService;
        private readonly ILogger<UserController> _logger;
        public AuthController(IUserService userService, IAuthService authService, ILogger<UserController> logger)
        {
            _userSevice = userService;
            _authService = authService;
            _logger = logger;
        }


        [HttpPost]
        public async Task<ActionResult<User>> Authenticate(User user)
        {
            try
            {
                return await _authService.AuthenticateAsync(user.UserName, user.Password);
            }
            catch (AuthException authEx)
            {
                return BadRequest(authEx.Message);
            }
        }
    }
}