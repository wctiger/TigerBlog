using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TigerBlog.Infrastructure.Database;
using TigerBlog.Models.DTO;
using TigerBlog.Models.Interface.Infrastructure;
using TigerBlog.Models.Interface.Repository;
using TigerBlog.Models.Interface.Services;
using TigerBlog.Models.ViewModel;
using TigerBlog.Repositories;
using TigerBlog.Services;

namespace TigerBlog.API
{
    public static class StartupExtensions
    {
        public static void RegisterDependencies(this IServiceCollection services)
        {
            services.AddScoped<ISqlContext, SqliteContext>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IPostRepository, PostRepository>();
            services.AddScoped<IPostService, PostService>();
        }

        public static void RegisterAutoMapper(this IServiceCollection services)
        {
            services.AddAutoMapper(cfg =>
            {
                cfg.CreateMap<DateTime, string>().ConvertUsing(dt => dt.ToString("yyyy-MM-dd HH:mm:ss"));                
            });
        }        
    }    
}
