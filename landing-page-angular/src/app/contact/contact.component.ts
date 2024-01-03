import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent implements OnInit {

  formularioContacto: FormGroup;
  tipoDni: string = "Dni";


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
      tipoDni: [''],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe( value => {
      this.tipoDni = value;
    });
  }

  enviar(){ 
    console.log(this.formularioContacto)
   }

   hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
   }

}
