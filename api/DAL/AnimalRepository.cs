/*  */


using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.DAL;

public class AnimalRepository : IAnimalRepository
{
    private readonly AppDbContext _db;
    public AnimalRepository(AppDbContext db) => _db = db;

    public Task<List<Animal>> GetAllAsync() =>
        _db.Animals.AsNoTracking().ToListAsync();
}
