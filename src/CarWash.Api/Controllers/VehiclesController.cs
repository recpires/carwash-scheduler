using Microsoft.AspNetCore.Mvc;
using CarWash.Api.Models;
using System.Collections.Generic;

namespace CarWash.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        private static List<Vehicle> vehicles = new List<Vehicle>();

        [HttpGet]
        public ActionResult<IEnumerable<Vehicle>> GetVehicles()
        {
            return Ok(vehicles);
        }

        [HttpPost]
        public ActionResult<Vehicle> AddVehicle([FromBody] Vehicle vehicle)
        {
            vehicles.Add(vehicle);
            return CreatedAtAction(nameof(GetVehicles), new { id = vehicle.Id }, vehicle);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateVehicle(int id, [FromBody] Vehicle vehicle)
        {
            var existingVehicle = vehicles.Find(v => v.Id == id);
            if (existingVehicle == null)
            {
                return NotFound();
            }

            existingVehicle.Make = vehicle.Make;
            existingVehicle.Model = vehicle.Model;
            existingVehicle.Year = vehicle.Year;
            existingVehicle.LicensePlate = vehicle.LicensePlate;

            return NoContent();
        }
    }
}