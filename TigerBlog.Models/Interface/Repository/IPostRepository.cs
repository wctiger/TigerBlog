using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TigerBlog.Models.ViewModel;

namespace TigerBlog.Models.Interface.Repository
{
    public interface IPostRepository : IRepository<Post>
    {
        Task<IEnumerable<Post>> GetAllSummary();
        Task<IEnumerable<Post>> GetAll();
        Task<IEnumerable<Post>> GetAllSummaryByOwner(int userId);
        Task<IEnumerable<Post>> GetAllByOwner(int userId);
    }
}
