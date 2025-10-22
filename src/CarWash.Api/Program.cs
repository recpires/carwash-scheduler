using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using CarWash.Infrastructure.Data;
using CarWash.Infrastructure.Repositories;
using CarWash.Core.Interfaces;

namespace CarWash.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
