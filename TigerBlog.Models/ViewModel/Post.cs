using System;
using System.Collections.Generic;
using System.Text;

namespace TigerBlog.Models.ViewModel
{
    public class Post
    {
        public int PostId { get; set; }
        public int Owner { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public string Content { get; set; }
        public bool IsArchived { get; set; }
        public DateTime CreatedTime { get; set; }
        public DateTime UpdatedTime { get; set; }
    }
}
