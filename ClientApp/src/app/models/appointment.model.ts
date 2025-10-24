export class Appointment {
  id: number;
  startTime: Date;
  status: string;

  // Adicione aqui qualquer outra propriedade que seu Appointment tiver (ex: vehicleId)

  constructor() {
    this.id = 0;
    this.startTime = new Date();
    this.status = "";
  }
}
