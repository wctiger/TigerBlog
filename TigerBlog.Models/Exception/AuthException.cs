using System;
using System.Collections.Generic;
using System.Text;

namespace TigerBlog.Models.Exception
{
    public class AuthException : System.Exception
    {
        public AuthException(string message) : base(message)
        { }
    }
}
