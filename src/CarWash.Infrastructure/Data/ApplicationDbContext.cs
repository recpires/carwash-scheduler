using Microsoft.EntityFrameworkCore;
using CarWash.Core.Entities; // <-- 2. ADICIONE ESTE (para encontrar a classe Appointment)

namespace CarWash.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        // 3. Registra a tabela 'Appointments'
        // (O '= default!' corrige o aviso CS8618)
        public DbSet<Appointment> Appointments { get; set; } = default!;

        // 4. Registra a tabela 'Vehicles'
        // (Isso corrige o erro CS1061)
        public DbSet<Vehicle> Vehicles { get; set; } = default!;
    }
}