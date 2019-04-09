using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TigerBlog.Models.Interface.Repository
{
    public interface IRepository<T>
    {
        Task<int> InsertAsync(T viewmodel);
        Task<T> UpdateAsync(T viewmodel);
        Task<IEnumerable<T>> QueryAllAsync();
        Task<T> QueryAsync(int id);
        Task<int> DeleteAsync(int id);
    }
}
