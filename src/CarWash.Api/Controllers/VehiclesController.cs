using Microsoft.AspNetCore.Mvc;
using CarWash.Core.Entities; 
using CarWash.Infrastructure.Data; // O namespace do seu DbContext
using Microsoft.EntityFrameworkCore; // Necessário para o ToListAsync, FindAsync, etc.
using System.Collections.Generic;
using System.Threading.Tasks; // Necessário para async/await

namespace CarWash.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        // 1. Remova a lista estática
        // private static List<Vehicle> vehicles = new List<Vehicle>();

        // 2. Injete o DbContext
        private readonly ApplicationDbContext _context;

        public VehiclesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // --- MÉTODO GET (BUSCAR TODOS) ---
        // Trocamos por uma chamada assíncrona ao banco
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vehicle>>> GetVehicles()
        {
            // Busca todos os veículos da tabela 'Vehicles' no banco
            return await _context.Vehicles.ToListAsync();
        }

        // --- MÉTODO GET (BUSCAR POR ID) ---
        // (Este é novo, e é importante para o 'CreatedAtAction' funcionar)
        [HttpGet("{id}")]
        public async Task<ActionResult<Vehicle>> GetVehicle(int id)
        {
            var vehicle = await _context.Vehicles.FindAsync(id);

            if (vehicle == null)
            {
                return NotFound();
            }

            return vehicle;
        }


        // --- MÉTODO POST (ADICIONAR NOVO) ---
        [HttpPost]
        public async Task<ActionResult<Vehicle>> AddVehicle([FromBody] Vehicle vehicle)
        {
            // 1. Adiciona o veículo ao DbContext
            _context.Vehicles.Add(vehicle);
            
            // 2. Salva as mudanças no BANCO DE DADOS
            await _context.SaveChangesAsync(); 
            // (O PostgreSQL agora vai gerar o 'Id' automaticamente)

            // 3. Retorna 201 Created, apontando para o método GetVehicle
            return CreatedAtAction(nameof(GetVehicle), new { id = vehicle.Id }, vehicle);
        }

        // --- MÉTODO PUT (ATUALIZAR) ---
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVehicle(int id, [FromBody] Vehicle vehicle)
        {
            if (id != vehicle.Id)
            {
                return BadRequest();
            }

            // 1. Encontra o veículo no banco
            var existingVehicle = await _context.Vehicles.FindAsync(id);
            if (existingVehicle == null)
            {
                return NotFound();
            }

            // 2. Atualiza as propriedades
            existingVehicle.Make = vehicle.Make;
            existingVehicle.Model = vehicle.Model;
            existingVehicle.Year = vehicle.Year;
            existingVehicle.LicensePlate = vehicle.LicensePlate;

            // 3. Marca como modificado e SALVA no banco
            _context.Entry(existingVehicle).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent(); // Retorna 204 No Content (Sucesso)
        }

        // (Você também pode adicionar um método DELETE aqui depois)
    }
}