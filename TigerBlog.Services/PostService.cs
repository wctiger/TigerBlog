using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TigerBlog.Models.Interface.Repository;
using TigerBlog.Models.Interface.Services;
using TigerBlog.Models.ViewModel;

namespace TigerBlog.Services
{
    public class PostService : IPostService
    {
        private readonly IPostRepository _postRepository;
        public PostService(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        public async Task<bool> DeletePostAsync(int id)
        {
            var result = await _postRepository.DeleteAsync(id);
            return result > 0;
        }

        public Task<IEnumerable<Post>> GetAllPostsAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Post>> GetAllPostsByOwnerAsync(int userId)
        {
            return await _postRepository.GetAllByOwner(userId);
        }

        public Task<IEnumerable<Post>> GetAllSummaryAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Post>> GetAllSummaryByOwnerAsync(int userId)
        {
            return await _postRepository.GetAllSummaryByOwner(userId);
        }

        public async Task<Post> GetPostAsync(int id)
        {
            return await _postRepository.QueryAsync(id);
        }

        public async Task<bool> InsertPostAsync(Post post)
        {
            var result = await _postRepository.InsertAsync(post);
            return result > 0;
        }

        public async Task<Post> UpdatePostAsync(Post post)
        {
            return await _postRepository.UpdateAsync(post);            
        }
    }
}
