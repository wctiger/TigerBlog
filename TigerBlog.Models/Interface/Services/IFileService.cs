using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace TigerBlog.Models.Interface.Services
{
    public interface IFileService
    {
        Task<string> UploadAndCreateLinkAsync(Stream stream, string extension);
        Task<bool> UploadFileAsync(Stream stream);
        Task<bool> DeleteFileAsync(string filePath);
        Task<string> CreateFileLinkAsync(string filePath);
        Task<string> GetFileLinkAsync(string filePath);
    }
}
