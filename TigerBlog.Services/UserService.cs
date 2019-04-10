using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TigerBlog.Models.Interface.Repository;
using TigerBlog.Models.Interface.Services;
using TigerBlog.Models.ViewModel;

namespace TigerBlog.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepo;
        public UserService(IUserRepository userRepository)
        {
            _userRepo = userRepository;
        }
        public Task<IEnumerable<User>> GetAllUsersAsync()
        {
            return _userRepo.QueryAllAsync();
        }
        
    }
}
