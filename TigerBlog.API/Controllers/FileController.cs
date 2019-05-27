using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TigerBlog.Models.Interface.Services;

namespace TigerBlog.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        private readonly IFileService _fileService;
        private readonly ILogger<FileController> _logger;
        public FileController(IFileService fileService, ILogger<FileController> logger)
        {
            _fileService = fileService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<ActionResult<string>> UploadFile(IFormFile file)
        {
            if(file == null)
            {
                return BadRequest();
            }                        

            Stream stream = file.OpenReadStream();
            string ext = file.FileName.Substring(file.FileName.LastIndexOf('.'));
            return await _fileService.UploadAndCreateLinkAsync(stream, ext);
        }
    }
}