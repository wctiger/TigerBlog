using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TigerBlog.Models.DTO;
using TigerBlog.Models.Interface.Infrastructure;
using TigerBlog.Models.Interface.Repository;
using TigerBlog.Models.ViewModel;
using System.Linq;

namespace TigerBlog.Repositories
{
    public class PostRepository : RepositoryBase, IPostRepository
    {        
        public PostRepository(IMapper mapper, ISqlContext context) 
            :base(mapper, context)
        {  }

        public Task<int> DeleteAsync(int id)
        {
            string command = @"DELETE FROM Posts WHERE PostId = @PostId";
            return DbContext.ExecuteNonQueryAsync(command, new { PostId = id });
        }

        public async Task<IEnumerable<Post>> GetAllByOwner(int userId)
        {
            string query = @"SELECT PostId, Owner, Title, Summary, Content, CreatedTime, UpdatedTime 
                             FROM Posts
                             WHERE IsArchived = 0 AND Owner = @UserId";

            var result = await DbContext.ExecuteQueryAsync<PostDTO>(query, new { UserId = userId });
            return Mapper.Map<IEnumerable<Post>>(result);
        }

        public async Task<IEnumerable<Post>> GetAllSummaryByOwner(int userId)
        {
            string query = @"SELECT PostId, Owner, Title, Summary, CreatedTime, UpdatedTime 
                             FROM Posts
                             WHERE IsArchived = 0 AND Owner = @UserId";

            var result = await DbContext.ExecuteQueryAsync<PostDTO>(query, new { UserId = userId });
            return Mapper.Map<IEnumerable<Post>>(result);
        }        

        public Task<int> InsertAsync(Post viewmodel)
        {
            string command = @"INSERT INTO Posts (Owner, Title, Summary, Content, IsArchived, CreatedTime, UpdatedTime)
                             VALUES (@Owner, @Title, @Summary, @Content, @IsArchived, @CreatedTime, @UpdatedTime)";

            DateTime now = DateTime.Now;
            viewmodel.CreatedTime = now;
            viewmodel.UpdatedTime = now;
            viewmodel.IsArchived = false;

            PostDTO model = Mapper.Map<PostDTO>(viewmodel);

            return DbContext.ExecuteNonQueryAsync(command, model);
        }

        public Task<IEnumerable<Post>> QueryAllAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<Post> QueryAsync(int id)
        {
            string query = @"SELECT PostId, Owner, Title, Summary, Content, CreatedTime, UpdatedTime 
                             FROM Posts
                             WHERE IsArchived = 0 AND PostId = @PostId";
            var result = await DbContext.ExecuteQueryAsync<Post>(query, new { PostId = id });
            return Mapper.Map<Post>(result.FirstOrDefault());
        }

        public async Task<Post> UpdateAsync(Post viewmodel)
        {
            string updateCmd = @"UPDATE Posts 
                                 SET Title = @Title, Summary = @Summary, Content = @Content, UpdatedTime = @UpdatedTime
                                 WHERE PostId = @PostId AND Owner = @Owner";
            string selectQuery = @"SELECT PostId, Owner, Title, Summary, Content, CreatedTime, UpdatedTime 
                                   FROM Posts
                                   WHERE PostId = @PostId";

            viewmodel.UpdatedTime = DateTime.Now;
            var model = Mapper.Map<PostDTO>(viewmodel);

            var result = await DbContext.ExecuteCommandAndQueryAsync(updateCmd, selectQuery, model);
            return Mapper.Map<Post>(result);
        }
    }
}
