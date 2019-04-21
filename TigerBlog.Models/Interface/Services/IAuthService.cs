using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TigerBlog.Models.Interface.Services
{
    public interface IAuthService
    {
        Task<string> AuthenticateAsync(string username, string password);
    }
}
