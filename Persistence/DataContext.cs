using Microsoft.EntityFrameworkCore;
using Domain; // Importerar classen Activity
// Classen Activity funkar även som ett interface? Rad 14

namespace Persistence
{
  public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) // constructor
        {

        }

        public DbSet<Activity> Activities { get; set; } 
    }
}