using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using TigerBlog.Models.Interface.Services;
using TigerBlog.Models.ViewModel;
using System.Collections.Generic;
using System.Linq;

namespace TigerBlog.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostService _postService;
        public PostController(IPostService postService)
        {
            _postService = postService;
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> Get(int id)
        {
            return await _postService.GetPostAsync(id);
        }

        [AllowAnonymous]
        [HttpGet("GetSummary")]
        public async Task<ActionResult<List<Post>>> GetSummary()
        {            
            return (await _postService.GetAllSummaryAsync()).ToList();
        }

        [AllowAnonymous]
        [HttpGet("GetAll")]
        public async Task<ActionResult<List<Post>>> GetAll()
        {
            return (await _postService.GetAllPostsAsync()).ToList();
        }

        [HttpPost("Create")]
        public async Task<ActionResult<bool>> Insert(Post post)
        {
            if (!int.TryParse(HttpContext.User.Identity.Name, out int userId))
            {
                return ValidationProblem();
            }
            post.Owner = userId;
            return await _postService.InsertPostAsync(post);
        }

        [HttpDelete("Delete/{id}")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            return await _postService.DeletePostAsync(id);
        }

        [HttpPut("Update")]
        public async Task<ActionResult<Post>> Update(Post post)
        {
            if (!int.TryParse(HttpContext.User.Identity.Name, out int userId))
            {
                return ValidationProblem();
            }
            post.Owner = userId;
            return await _postService.UpdatePostAsync(post);
        }

    }
}