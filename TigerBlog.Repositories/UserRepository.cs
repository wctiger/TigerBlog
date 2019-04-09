using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TigerBlog.Models.DTO;
using TigerBlog.Models.Interface.Infrastructure;
using TigerBlog.Models.Interface.Repository;
using TigerBlog.Models.ViewModel;

namespace TigerBlog.Repositories
{
    public class UserRepository : RepositoryBase, IUserRepository
    {
        private readonly ISqlHelper _dbContext;

        public UserRepository(ISqlHelper context, IMapper mapper) 
            : base(mapper)
        {
            _dbContext = context;
        }
        public Task<int> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> InsertAsync(User viewmodel)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<User>> QueryAllAsync()
        {
            string query = @"SELECT * FROM Users";
            var result = await _dbContext.ExecuteQueryAsync<UserDTO>(query);
            var users = Mapper.Map<IEnumerable<User>>(result);

            return users;
        }

        public Task<User> QueryAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<User> UpdateAsync(User viewmodel)
        {
            throw new NotImplementedException();
        }
    }
}
