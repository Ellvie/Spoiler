using Microsoft.EntityFrameworkCore;
using Spoiler.Models;

namespace Spoiler.Data
{
    public class SpoilerContext : DbContext
    {
        public SpoilerContext(DbContextOptions<SpoilerContext> options) : base(options)
        {
        }


        public DbSet<Show> Shows { get; set; }
        public DbSet<Film> Films { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<TVGuide> TVGuide { get; set; }
        public DbSet<Forum> Forum { get; set; }
        public DbSet<Recap> Recap { get; set; }
        public DbSet<Review> Review { get; set; }
        public DbSet<ForumComment> ForumComment { get; set; }
    }
}
