
using api.Data;
using Microsoft.EntityFrameworkCore;
using api.DAL;


var builder = WebApplication.CreateBuilder(args);

/* repository */
builder.Services.AddScoped<IAnimalRepository, AnimalRepository>();

/* database */
builder.Services.AddDbContext<api.Data.AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("Default")));


// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();


/* Db seeder to add animals*/
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    DbSeeder.Seed(db);
}


app.Run();


