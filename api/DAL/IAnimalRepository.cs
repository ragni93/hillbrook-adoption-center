/* Interface. Data Layer Acess. */

using api.Models;

namespace api.DAL;

public interface IAnimalRepository
{
    Task<List<Animal>> GetAllAsync();
}

