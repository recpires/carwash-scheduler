using Microsoft.AspNetCore.Mvc;
using CarWash.Api.Services;
using CarWash.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CarWash.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SchedulingController : ControllerBase
    {
        private readonly SchedulingService _schedulingService;

        public SchedulingController(SchedulingService schedulingService)
        {
            _schedulingService = schedulingService;
        }

        // GET /api/scheduling/appointments
        [HttpGet("appointments")]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments()
        {
            var appointments = await _schedulingService.GetAppointmentsAsync();
            return Ok(appointments);
        }

        // GET /api/scheduling/appointments/{id}
        [HttpGet("appointments/{id}")]
        public async Task<ActionResult<Appointment>> GetAppointment(int id)
        {
            var appointment = await _schedulingService.GetAppointmentByIdAsync(id);
            if (appointment == null) return NotFound();
            return Ok(appointment);
        }

        // POST /api/scheduling/appointments
        [HttpPost("appointments")]
        public async Task<ActionResult<Appointment>> ScheduleAppointment([FromBody] Appointment appointment)
        {
            var createdAppointment = await _schedulingService.CreateAppointmentAsync(appointment);
            return CreatedAtAction(nameof(GetAppointment), new { id = createdAppointment.Id }, createdAppointment);
        }

        // DELETE /api/scheduling/appointments/{id}
        [HttpDelete("appointments/{id}")]
        public async Task<IActionResult> CancelAppointment(int id)
        {
            var result = await _schedulingService.CancelAppointmentAsync(id);
            if (!result) return NotFound();
            return NoContent();
        }
    }
}