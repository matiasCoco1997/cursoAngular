import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrl: './dni.component.css'
})
export class DniComponent implements OnChanges{

  @Input() tipoDni: string = "Dni";

  formularioDocumento: FormGroup;

  variableNueva: string = "DNI";

  constructor ( private form : FormBuilder ){
    this.formularioDocumento = this.form.group ({
      dni: [''],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.variableNueva = changes?.['tipoDni'].currentValue;
  }

  hasErrors(controlName: string, errorType: string){
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched;
   }
}
