using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SQLite;
using TigerBlog.Models.Interface.Infrastructure;
using Dapper;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using TigerBlog.Utilities;
using Microsoft.Extensions.Options;

namespace TigerBlog.Infrastructure.Database
{
    public class SqliteContext : ISqlContext
    {
        private string _connStr;
        public SqliteContext(IOptionsMonitor<AppSettings> settings)
        {
            _connStr = settings.CurrentValue.ConnectionString;
        }

        public int ExecuteDelete(string deleteQuery)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<T>> ExecuteQueryAsync<T>(string plainQuery)
        {
            IEnumerable<T> result;

            using (var con = new SQLiteConnection(_connStr))
            {
                result = await con.QueryAsync<T>(plainQuery);
            }

            return result;
        }
    }
}
