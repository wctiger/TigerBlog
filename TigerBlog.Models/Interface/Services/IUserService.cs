using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TigerBlog.Models.ViewModel;

namespace TigerBlog.Models.Interface.Services
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetAllUsersAsync();

        Task<bool> InsertUserAsync(User user);

        Task<bool> DeleteUserAsync(int id);
    }
}
