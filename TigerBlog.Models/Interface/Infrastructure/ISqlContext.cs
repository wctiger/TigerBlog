using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TigerBlog.Models.Interface.Infrastructure
{
    public interface ISqlContext
    {        
        /// <summary>
        /// Handles delete
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
        Task<int> ExecuteNonQueryAsync<T>(string command, T data);

        /// <summary>
        /// Handles R
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="plainQuery"></param>
        /// <returns></returns>
        Task<IEnumerable<T>> ExecuteQueryAsync<T>(string plainQuery);

        Task<IEnumerable<T>> ExecuteQueryAsync<T>(string query, object predicate);
    }
}
