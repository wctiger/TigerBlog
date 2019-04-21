using System;
using System.Collections.Generic;
using System.Text;

namespace TigerBlog.Utilities
{
    public class AppSettings
    {        
        public string ConnectionString { get; set; } = "";
        public string HashKey { get; set; } = "";
        public string APISecret { get; set; } = "";
    }
}
