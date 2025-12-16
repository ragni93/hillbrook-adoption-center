using api.Models;

namespace api.Data;

public static class DbSeeder
{
    public static void Seed(AppDbContext db)
    {
        if (db.Animals.Any()) return;

        db.Animals.AddRange(
            new Animal {
                Name = "Dobby",
                Born = 2017,
                Description = "Funny and charming boy who loves running and fetching.",
                ImageUrl = "/images/Dobby.png"
            },
            new Animal {
                Name = "Arwen",
                Born = 2018,
                Description = "Sweet but strong girl who loves being the center of attention.",
                ImageUrl = "/images/arwen.png"
            }
        );

        db.SaveChanges();
    }
}
