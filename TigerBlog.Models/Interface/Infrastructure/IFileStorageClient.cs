using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace TigerBlog.Models.Interface.Infrastructure
{
    public interface IFileStorageClient
    {
        Task<bool> UploadFileAsync(Stream stream, string filePath);
        Task<bool> DeleteFileAsync(string filePath);
        Task<string> CreateFileLinkAsync(string filePath);
        Task<string> GetFileLinkAsync(string filePath);
    }
}
