/* AppDbContext er koblingen mellom databasen og C#-kodene dine. Den forteller Entity Framework:
       hvilke tabeller databasen har hvordan C#-klassene dine henger sammen med databasen*/

using Microsoft.EntityFrameworkCore;
using api.Models; /* gives access to my Models */

namespace api.Data;

public class AppDbContext : DbContext /* heritage. This class represents the database, communicates to the database */
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {} /* constructor */

    public DbSet<Animal> Animals => Set<Animal>();
}