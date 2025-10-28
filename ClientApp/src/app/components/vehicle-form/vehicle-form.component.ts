import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VehicleService } from "../../services/vehicle.service"; // Ajuste o caminho se for diferente

@Component({
  selector: "app-vehicle-form",
  templateUrl: "./vehicle-form.component.html",
  styleUrls: ["./vehicle-form.component.css"],
})
export class VehicleFormComponent implements OnInit {
  // 1. Declarar o FormGroup
  vehicleForm: FormGroup;

  // 2. @Output para avisar o componente "pai" que um novo veículo foi salvo
  // Isso é crucial para atualizar a lista de veículos automaticamente
  @Output() vehicleSaved = new EventEmitter<void>();

  // 3. Injetar o FormBuilder (fb) e o VehicleService
  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService // Verifique se o nome do seu serviço é esse
  ) {}

  ngOnInit(): void {
    // 4. Inicializar o formulário
    this.vehicleForm = this.fb.group({
      // O nome aqui (marca, modelo, ano, placa) deve ser
      // EXATAMENTE igual ao seu DTO/Modelo no backend .NET
      marca: ["", [Validators.required, Validators.minLength(2)]],
      modelo: ["", [Validators.required]],
      ano: [
        new Date().getFullYear(),
        [
          Validators.required,
          Validators.min(1950),
          Validators.max(new Date().getFullYear() + 1),
        ],
      ],
      placa: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/i),
        ],
      ], // Regex básico para placa Mercosul/Antiga (case-insensitive)
    });
  }

  // 5. Criar o método de submit
  onSubmit(): void {
    if (this.vehicleForm.invalid) {
      // Marcar todos os campos como "tocados" para exibir os erros instantaneamente
      this.vehicleForm.markAllAsTouched();
      return;
    }

    console.log("Enviando para o backend:", this.vehicleForm.value);

    // 6. Usar o serviço para salvar
    // Assumindo que seu serviço tem um método 'addVehicle' ou similar
    this.vehicleService.addVehicle(this.vehicleForm.value).subscribe({
      next: (response) => {
        console.log("Veículo salvo com sucesso!", response);
        this.vehicleForm.reset(); // Limpa o formulário

        // 7. Avisa o componente pai (ex: app.component) que a lista precisa ser atualizada
        this.vehicleSaved.emit();
      },
      error: (err) => {
        console.error("Erro ao salvar veículo", err);
        // Aqui você poderia exibir uma mensagem de erro para o usuário
      },
    });
  }

  // Opcional: Função helper para facilitar a exibição de erros no HTML
  getErrorMessage(controlName: string): string {
    const control = this.vehicleForm.get(controlName);

    if (control.hasError("required")) return "Este campo é obrigatório.";
    if (control.hasError("minlength")) return "Muito curto.";
    if (control.hasError("min"))
      return `O ano deve ser no mínimo ${control.errors.min.min}.`;
    if (control.hasError("max"))
      return `O ano deve ser no máximo ${control.errors.max.max}.`;
    if (control.hasError("pattern")) return "Formato de placa inválido.";

    return "";
  }
}
