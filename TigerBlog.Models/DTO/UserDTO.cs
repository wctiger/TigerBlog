﻿using System;
using System.Collections.Generic;
using System.Text;

namespace TigerBlog.Models.DTO
{
    public class UserDTO
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool IsAdmin { get; set; }        
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string CreatedTime { get; set; }
        public string UpdatedTime { get; set; }
    }
}
