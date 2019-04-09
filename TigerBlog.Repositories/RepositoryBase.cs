using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace TigerBlog.Repositories
{
    public abstract class RepositoryBase
    {
        protected IMapper Mapper { get; set; }

        public RepositoryBase(IMapper mapper)
        {
            Mapper = mapper;
        }
    }
}
