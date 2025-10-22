# Car Wash Scheduler

## Overview

The Car Wash Scheduler is a web application designed to facilitate the scheduling of car wash appointments. It allows users to manage their vehicles and book appointments efficiently.

## Technologies Used

- **Backend**: .NET Core with C#
- **Frontend**: Angular
- **Database**: Entity Framework Core
- **Containerization**: Docker

## Features

- Vehicle management: Add, update, and view vehicle details.
- Appointment scheduling: Schedule, view, and cancel appointments.
- RESTful API: Interact with the backend using a well-defined API.

## Project Structure

```
carwash-scheduler
├── .gitignore
├── CarWash.sln
├── README.md
├── docker-compose.yml
├── src
│   ├── CarWash.Api
│   ├── CarWash.Core
│   └── CarWash.Infrastructure
├── tests
│   ├── CarWash.Api.Tests
│   └── CarWash.Core.Tests
└── ClientApp
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd carwash-scheduler
   ```
3. Build the solution:
   ```
   dotnet build CarWash.sln
   ```
4. Run the application:
   ```
   dotnet run --project src/CarWash.Api/CarWash.Api.csproj
   ```
5. Navigate to the Angular client:
   ```
   cd ClientApp
   npm install
   ng serve
   ```

## API Endpoints

- **Vehicles**

  - `GET /api/vehicles`: Retrieve all vehicles.
  - `POST /api/vehicles`: Add a new vehicle.
  - `PUT /api/vehicles/{id}`: Update vehicle details.

- **Scheduling**
  - `GET /api/scheduling/appointments`: Retrieve all appointments.
  - `POST /api/scheduling/appointments`: Schedule a new appointment.
  - `DELETE /api/scheduling/appointments/{id}`: Cancel an appointment.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
