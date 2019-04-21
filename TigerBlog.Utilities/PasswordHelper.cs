using System;
using System.Collections.Generic;
using System.Text;

namespace TigerBlog.Utilities
{
    public static class PasswordHelper
    {
        public static string CreatePasswordHash(string password, string hashKey)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            string passwordHash = "";

            using (var hmac = new System.Security.Cryptography.HMACSHA512(Encoding.UTF8.GetBytes(hashKey)))
            {                
                passwordHash = Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes(password)));
            }

            return passwordHash;            
        }

        public static bool VerifyPasswordHash(string password, string hashKey, string storedHash)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");            

            using (var hmac = new System.Security.Cryptography.HMACSHA512(Encoding.UTF8.GetBytes(hashKey)))
            {
                var computedHash = Convert.ToBase64String(hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password)));
                if (computedHash != storedHash) return false;
            }

            return true;
        }
    }
}
