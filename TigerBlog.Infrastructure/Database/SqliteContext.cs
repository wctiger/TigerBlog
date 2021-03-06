﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SQLite;
using TigerBlog.Models.Interface.Infrastructure;
using Dapper;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using TigerBlog.Utilities;
using Microsoft.Extensions.Options;
using System.Linq;

namespace TigerBlog.Infrastructure.Database
{
    public class SqliteContext : ISqlContext
    {
        private string _connStr;
        public SqliteContext(IOptionsMonitor<AppSettings> settings)
        {
            _connStr = settings.CurrentValue.ConnectionString;
        }

        public async Task<int> ExecuteNonQueryAsync<T>(string query, T data)
        {
            int rowCount = 0;

            using (var con = new SQLiteConnection(_connStr))
            {                
                rowCount = await con.ExecuteAsync(query, data);
            }

            return rowCount;
        }            

        public async Task<IEnumerable<T>> ExecuteQueryAsync<T>(string plainQuery)
        {
            return await QueryAsync<T>(plainQuery, null);
        }

        public async Task<IEnumerable<T>> ExecuteQueryAsync<T>(string query, object predicate)
        {
            return await QueryAsync<T>(query, predicate);
        }

        public async Task<T> ExecuteCommandAndQueryAsync<T>(string command, string query, T data)
        {            
            T retObj = default;

            using (var con = new SQLiteConnection(_connStr))
            {
                await con.ExecuteAsync(command, data); 
                // If nothing was updated, still run query and return DB object
                retObj = (await con.QueryAsync<T>(query, data)).FirstOrDefault();                
            }
            return retObj;
        }

        private async Task<IEnumerable<T>> QueryAsync<T>(string query, object param)
        {
            IEnumerable<T> result;

            using (var con = new SQLiteConnection(_connStr))
            {
                result = await con.QueryAsync<T>(query, param);
            }

            return result;
        }
    }
}
