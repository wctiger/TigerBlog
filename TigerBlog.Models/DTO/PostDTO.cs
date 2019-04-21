using System;
using System.Collections.Generic;
using System.Text;

namespace TigerBlog.Models.DTO
{
    public class PostDTO
    {
        public int PostId { get; set; }
        public int Owner { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public string Content { get; set; }
        public bool IsArchived { get; set; }
        public string CreatedTime { get; set; }
        public string UpdatedTime { get; set; }
    }
}
