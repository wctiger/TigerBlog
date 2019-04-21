using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TigerBlog.Models.ViewModel;

namespace TigerBlog.Models.Interface.Services
{
    public interface IPostService
    {
        Task<Post> GetPostAsync(int id);
        Task<IEnumerable<Post>> GetAllSummaryAsync();
        Task<IEnumerable<Post>> GetAllPostsAsync();
        Task<IEnumerable<Post>> GetAllSummaryByOwnerAsync(int userId);
        Task<IEnumerable<Post>> GetAllPostsByOwnerAsync(int userId);
        Task<bool> InsertPostAsync(Post post);
        Task<bool> DeletePostAsync(int id);
        Task<Post> UpdatePostAsync(Post post);
    }
}
