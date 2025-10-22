namespace CarWash.Core.Interfaces
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using CarWash.Core.Entities;

    public interface ISchedulingRepository
    {
        Task<Appointment> AddAppointmentAsync(Appointment appointment);
        Task<IEnumerable<Appointment>> GetAppointmentsAsync();
        Task<Appointment?> GetAppointmentByIdAsync(int id);
        Task UpdateAppointmentAsync(Appointment appointment);
        Task<bool> DeleteAppointmentAsync(int id);
    }
}