using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Swashbuckle.AspNetCore.Swagger;
using System;
using System.Text;
using System.Threading.Tasks;
using TigerBlog.Infrastructure.Database;
using TigerBlog.Models.DTO;
using TigerBlog.Models.Interface.Infrastructure;
using TigerBlog.Models.Interface.Repository;
using TigerBlog.Models.Interface.Services;
using TigerBlog.Models.ViewModel;
using TigerBlog.Repositories;
using TigerBlog.Services;
using TigerBlog.Utilities;
using System.Collections.Generic;

namespace TigerBlog.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper(RegisterModelMapping);
            services.AddCors();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info() { Title = "Blog API", Version = "v1" });
                c.AddSecurityDefinition("Bearer", new ApiKeyScheme
                {
                    Description = "JWT Bearer Authorization Header",
                    In = "header",
                    Name = "Authorization",
                    Type = "apiKey"
                });
                c.AddSecurityRequirement(new Dictionary<string, IEnumerable<string>>
                {
                    { "Bearer", new string[] { } }
                });                                            
            });

            var appSettingsSection = Configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);

            var key = Encoding.UTF8.GetBytes(appSettingsSection.Get<AppSettings>().APISecret);
            services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(opt =>
            {
                opt.RequireHttpsMetadata = false;
                opt.SaveToken = true;
                opt.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

            RegisterDependencies(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler(errorApp =>
                {
                    errorApp.Run(context =>
                        Task.Run(() =>
                        {
                            var exceptionHandlerPathFeature = context.Features.Get<IExceptionHandlerPathFeature>();
                            NLog.LogManager.GetLogger("App-Exception").Log(NLog.LogLevel.Fatal, exceptionHandlerPathFeature.Error);
                        })
                    );
                });
            }

            app.UseCors(policy =>
            {
                policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod(); // change later
            });
            app.UseAuthentication();

            app.UseMvc();
            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Blog API v1"));
        }


        private void RegisterDependencies(IServiceCollection services)
        {
            services.AddScoped<ISqlContext, SqliteContext>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IAuthService, AuthService>();
        }

        private void RegisterModelMapping(IMapperConfigurationExpression cfg)
        {
            // USER
            cfg.CreateMap<User, UserDTO>()
                .ForMember(dest => dest.CreatedTime, opt => opt.MapFrom(src => src.CreatedTime.ToString("yyyy-MM-dd HH:mm:ss")))
                .ForMember(dest => dest.UpdatedTime, opt => opt.MapFrom(src => src.UpdatedTime.ToString("yyyy-MM-dd HH:mm:ss")));
            cfg.CreateMap<UserDTO, User>()
                .ForMember(dest => dest.CreatedTime, opt => opt.MapFrom(src => DateTime.Parse(src.CreatedTime)))
                .ForMember(dest => dest.UpdatedTime, opt => opt.MapFrom(src => DateTime.Parse(src.UpdatedTime)));
        }
    }
}
