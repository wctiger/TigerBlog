using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Threading.Tasks;
using TigerBlog.Models.Interface.Repository;
using TigerBlog.Models.Interface.Services;
using TigerBlog.Models.ViewModel;
using TigerBlog.Utilities;

namespace TigerBlog.Services
{
    public class UserService : IUserService
    {
        private readonly string _hashKey;
        private readonly IUserRepository _userRepo;
        public UserService(IUserRepository userRepository, IOptions<AppSettings> appSettings)
        {
            _userRepo = userRepository;
            _hashKey = appSettings.Value.HashKey;
        }
        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            return await _userRepo.QueryAllAsync();
        }

        public async Task<bool> InsertUserAsync(User user)
        {
            user.Password = PasswordHelper.CreatePasswordHash(user.Password, _hashKey);
            int count = await _userRepo.InsertAsync(user);
            return count > 0;
        }

        public async Task<bool> DeleteUserAsync(int id)
        {
            int count = await _userRepo.DeleteAsync(id);
            return count > 0;
        }
    }
}
