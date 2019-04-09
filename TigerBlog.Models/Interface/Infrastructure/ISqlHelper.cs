using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TigerBlog.Models.Interface.Infrastructure
{
    public interface ISqlHelper
    {        
        /// <summary>
        /// Handles delete
        /// </summary>
        /// <param name="deleteQuery"></param>
        /// <returns></returns>
        int ExecuteDelete(string deleteQuery);

        /// <summary>
        /// Handles R
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="plainQuery"></param>
        /// <returns></returns>
        Task<IEnumerable<T>> ExecuteQueryAsync<T>(string plainQuery);
    }
}
