using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using TigerBlog.Models.Interface.Services;
using TigerBlog.Models.ViewModel;

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
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await _postService.GetPostAsync(id));
        }

        [AllowAnonymous]
        [HttpGet("GetSummary")]
        public async Task<IActionResult> GetSummary()
        {            
            return Ok(await _postService.GetAllSummaryAsync());
        }

        [AllowAnonymous]
        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _postService.GetAllPostsAsync());
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Insert(Post post)
        {
            if (!int.TryParse(HttpContext.User.Identity.Name, out int userId))
            {
                return ValidationProblem();
            }
            post.Owner = userId;
            return Ok(await _postService.InsertPostAsync(post));
        }

        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _postService.DeletePostAsync(id));
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update(Post post)
        {
            if (!int.TryParse(HttpContext.User.Identity.Name, out int userId))
            {
                return ValidationProblem();
            }
            post.Owner = userId;
            return Ok(await _postService.UpdatePostAsync(post));
        }

    }
}