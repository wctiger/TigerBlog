using System;
using System.Collections.Generic;
using System.Text;

namespace TigerBlog.Models.ViewModel
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool IsAdmin { get; set; }        
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public DateTime CreatedTime { get; set; }
        public DateTime UpdatedTime { get; set; }
        public string Token { get; set; }
    }
}
