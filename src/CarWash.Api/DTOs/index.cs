using System;

namespace CarWash.Api.DTOs
{
    public class VehicleDto
    {
        public int Id { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public string LicensePlate { get; set; }
    }

    public class AppointmentDto
    {
        public int Id { get; set; }
        public int VehicleId { get; set; }
        public DateTime ScheduledTime { get; set; }
        public string Status { get; set; }
    }
}