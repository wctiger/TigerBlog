using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using TigerBlog.Models.DTO;
using TigerBlog.Models.ViewModel;

namespace TigerBlog.Repositories.MapperProfiles
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDTO>();
            CreateMap<UserDTO, User>();
        }
    }
}
