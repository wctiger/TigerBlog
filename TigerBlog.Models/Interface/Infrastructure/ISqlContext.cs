using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TigerBlog.Models.Interface.Infrastructure
{
    public interface ISqlContext
    {
        Task<T> ExecuteCommandAndQueryAsync<T>(string command, string query, T data);

        Task<int> ExecuteNonQueryAsync<T>(string command, T data);
        
        Task<IEnumerable<T>> ExecuteQueryAsync<T>(string plainQuery);

        Task<IEnumerable<T>> ExecuteQueryAsync<T>(string query, object predicate);
    }
}
