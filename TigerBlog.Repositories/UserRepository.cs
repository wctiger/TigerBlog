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
        public UserRepository(ISqlContext context, IMapper mapper) 
            : base(mapper, context)
        {
            DbContext = context;
        }

        public Task<int> DeleteAsync(int id)
        {
            string query = @"DELETE FROM USERS WHERE UserId = @Id";
            return DbContext.ExecuteNonQueryAsync(query, new { Id = id });
        }

        public async Task<User> GetByUserNameAsync(string username)
        {
            string query = @"SELECT * FROM Users WHERE UserName = @UserName";
            var results = await DbContext.ExecuteQueryAsync<UserDTO>(query, new { UserName = username });
            return Mapper.Map<User>(results.FirstOrDefault());            
        }

        public Task<int> InsertAsync(User viewmodel) 
        {
            string query = @"INSERT INTO USERS (UserName, Password, IsAdmin, DisplayName, Email, CreatedTime, UpdatedTime)
                             VALUES (@UserName, @Password, @IsAdmin, @DisplayName, @Email, @CreatedTime, @UpdatedTime)";
            DateTime now = DateTime.Now;
            viewmodel.UpdatedTime = now;
            viewmodel.CreatedTime = now;

            UserDTO model = Mapper.Map<UserDTO>(viewmodel);

            return DbContext.ExecuteNonQueryAsync(query, model);
        }

        public async Task<IEnumerable<User>> QueryAllAsync()
        {
            string query = @"SELECT * FROM Users";
            var result = await DbContext.ExecuteQueryAsync<UserDTO>(query);
            return Mapper.Map<IEnumerable<User>>(result);            
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
