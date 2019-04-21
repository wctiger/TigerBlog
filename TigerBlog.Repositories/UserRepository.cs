using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
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
        private readonly ISqlContext _dbContext;

        public UserRepository(ISqlContext context, IMapper mapper) 
            : base(mapper)
        {
            _dbContext = context;
        }
        public Task<int> DeleteAsync(int id)
        {
            string query = @"DELETE FROM USERS WHERE UserId = @Id";
            return _dbContext.ExecuteNonQueryAsync(query, new { Id = id });
        }

        public async Task<User> GetByUserNameAsync(string username)
        {
            string query = @"SELECT * FROM Users WHERE UserName = @UserName";
            var results = await _dbContext.ExecuteQueryAsync<UserDTO>(query, new { UserName = username });
            User user = Mapper.Map<User>(results.FirstOrDefault());
            return user;
        }

        public Task<int> InsertAsync(User viewmodel)
        {
            string query = @"INSERT INTO USERS (UserName, Password, IsAdmin, DisplayName, Email, CreatedTime, UpdatedTime)
                             VALUES (@UserName, @Password, @IsAdmin, @DisplayName, @Email, @CreatedTime, @UpdatedTime)";
            DateTime now = DateTime.Now;
            viewmodel.UpdatedTime = now;
            viewmodel.CreatedTime = now;

            UserDTO model = Mapper.Map<UserDTO>(viewmodel);

            return _dbContext.ExecuteNonQueryAsync(query, model);
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
