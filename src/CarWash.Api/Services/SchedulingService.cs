using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CarWash.Core.Entities;
using CarWash.Core.Interfaces;

namespace CarWash.Api.Services
{
    public class SchedulingService
    {
        private readonly ISchedulingRepository _schedulingRepository;

        public SchedulingService(ISchedulingRepository schedulingRepository)
        {
            _schedulingRepository = schedulingRepository;
        }

        public Task<Appointment> CreateAppointmentAsync(Appointment appointment)
        {
            return _schedulingRepository.AddAppointmentAsync(appointment);
        }

        public Task<IEnumerable<Appointment>> GetAppointmentsAsync()
        {
            return _schedulingRepository.GetAppointmentsAsync();
        }

        public Task<Appointment?> GetAppointmentByIdAsync(int id)
        {
            return _schedulingRepository.GetAppointmentByIdAsync(id);
        }

        public Task<bool> CancelAppointmentAsync(int appointmentId)
        {
            return _schedulingRepository.DeleteAppointmentAsync(appointmentId);
        }

        public Task UpdateAppointmentAsync(Appointment appointment)
        {
            return _schedulingRepository.UpdateAppointmentAsync(appointment);
        }
    }
}