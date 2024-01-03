import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent implements OnInit {

  formularioContacto: FormGroup;

  usuarioActivo: any = {
    nombre: "Matías",
    apellido: "Coco",
    dni: "11222333444"
  };

  constructor ( private form : FormBuilder ){
    this.formularioContacto = this.form.group ({
      nombre: ['', [Validators. required, Validators.minLength(3)]],
      apellido: [''],
      dni: [''],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.formularioContacto.get('apellido')?.setValidators([Validators. required, Validators.minLength(3)]);

    this.formularioContacto.patchValue( {
        nombre: this.usuarioActivo.nombre,
        apellido: this.usuarioActivo.apellido,
        dni: this.usuarioActivo.dni,
    })

    this.formularioContacto.get('nombre')?.disable();
    this.formularioContacto.get('apellido')?.disable();
    this.formularioContacto.get('dni')?.disable();
  }

  enviar(){ 
    console.log(this.formularioContacto)
   }

   hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
   }

}
