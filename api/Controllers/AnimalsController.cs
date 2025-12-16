/* This controller receievs HTTP-requests. AppDbContext communicates with the database. GET returns all Animal Rows.*/

using api.Data; /* gives access to the database*/
using api.Models; /* gives access to the models */
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AnimalsController : ControllerBase
{
    private readonly AppDbContext _db;

    public AnimalsController(AppDbContext db) => _db = db;

    [HttpGet] /* henter alle dyr fra databasen */
public async Task<List<api.Models.Animal>> Get() =>
    await _db.Animals.AsNoTracking().ToListAsync();


}
