using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TigerBlog.Models.ViewModel;

namespace TigerBlog.Models.Interface.Services
{
    public interface IAuthService
    {
        Task<User> AuthenticateAsync(string username, string password);
    }
}
