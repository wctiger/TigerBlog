using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using TigerBlog.Models.Interface.Infrastructure;

namespace TigerBlog.Repositories
{
    public abstract class RepositoryBase
    {
        protected IMapper Mapper { get; set; }

        protected ISqlContext DbContext { get; set; }

        public RepositoryBase(IMapper mapper, ISqlContext context)
        {
            Mapper = mapper;
            DbContext = context;
        }
    }
}
