using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TigerBlog.Models.Interface.Infrastructure;
using TigerBlog.Utilities;

using Dropbox.Api;
using Dropbox.Api.Common;
using Dropbox.Api.Files;
using Dropbox.Api.Sharing;
using System.IO;

namespace TigerBlog.Infrastructure.Dropbox
{
    public class DropboxStorageClient : IFileStorageClient
    {
        private const string DROPBOX_PREVIEW_DOMAIN = "www.dropbox.com";
        private const string DROPBOX_FILE_DOMAIN = "dl.dropboxusercontent.com";
        private readonly DropboxClient dropboxClient;
        public DropboxStorageClient(IOptionsMonitor<AppSettings> settings)
        {
            dropboxClient = new DropboxClient(settings.CurrentValue.DropboxAPIToken);
        }
        public async Task<string> CreateFileLinkAsync(string filePath)
        {
            var result = await dropboxClient.Sharing.CreateSharedLinkWithSettingsAsync(filePath, new SharedLinkSettings(new RequestedVisibility().AsPublic));
            return MassageSharingUrl(result.Url);
        }

        public async Task<bool> DeleteFileAsync(string filePath)
        {
            throw new NotImplementedException();
        }

        public async Task<string> GetFileLinkAsync(string filePath)
        {
            var result = await dropboxClient.Sharing.ListSharedLinksAsync(filePath);
            return MassageSharingUrl(result.Links[0].Url);
        }

        public async Task<bool> UploadFileAsync(Stream stream, string filePath)
        {
            var result = await dropboxClient.Files.UploadAsync(new CommitInfo(filePath), stream);
            return result.Id.Length > 0;
        }

        private string MassageSharingUrl(string url)
        {
            string temp = url.Replace(DROPBOX_PREVIEW_DOMAIN, DROPBOX_FILE_DOMAIN);
            return temp.Substring(0, temp.IndexOf('?'));
        }
    }
}
