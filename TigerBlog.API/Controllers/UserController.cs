using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TigerBlog.Models.Interface.Services;
using TigerBlog.Models.ViewModel;

namespace TigerBlog.API.Controllers
{    
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly IUserService _userService;
        public UserController(IUserService userService, ILogger<UserController> logger)
        {
            _userService = userService;
            _logger = logger;
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            _logger.LogInformation($"test get all");
            var a = HttpContext.User.Identity.Name;
            return Ok(await _userService.GetAllUsersAsync());
        }

        // GET: api/User/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/User
        [HttpPost("Create")]
        public async Task<IActionResult> Post(User user)
        {
            _logger.LogInformation($"test insert");
            return Ok(await _userService.InsertUserAsync(user));
        }
        
        [HttpPut("Update")]
        public Task<IActionResult> Put(User user)
        {
            throw new NotImplementedException();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _userService.DeleteUserAsync(id));
        }
    }
}
