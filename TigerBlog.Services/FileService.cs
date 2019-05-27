using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TigerBlog.Models.Interface.Services;
using TigerBlog.Models.Interface.Infrastructure;
using System.IO;

namespace TigerBlog.Services
{
    public class FileService : IFileService
    {
        private readonly IFileStorageClient _storageClient;
        public FileService(IFileStorageClient storageClient)
        {
            _storageClient = storageClient;
        }
        public async Task<string> CreateFileLinkAsync(string filePath)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> DeleteFileAsync(string filePath)
        {
            throw new NotImplementedException();
        }

        public async Task<string> GetFileLinkAsync(string filePath)
        {
            return await _storageClient.GetFileLinkAsync(filePath);
        }

        public async Task<string> UploadAndCreateLinkAsync(Stream stream, string extension)
        {            
            string path = ComputeNewFilePath(extension); // TODO: create folders
            if(await _storageClient.UploadFileAsync(stream, path))
            {
                return await _storageClient.CreateFileLinkAsync(path);
            }
            return null; // throw
        }        

        public async Task<bool> UploadFileAsync(Stream stream)
        {
            throw new NotImplementedException();
        }

        private string ComputeNewFilePath(string ext)
        {
            string p1 = "/";
            string p2 = DateTime.Now.ToString("MMddyyyyhhmmss");
            string p3 = Guid.NewGuid().ToString().Replace("-", "").ToLower().Substring(0, 15);
            return p1 + p2 + p3 + ext;
        }
    }
}
