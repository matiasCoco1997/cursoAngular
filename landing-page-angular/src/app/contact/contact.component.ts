import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent implements OnInit, OnDestroy {

  formularioContacto: FormGroup;
  tipoDni: string = "";
  mostrarDni: boolean = false;

  constructor ( private form : FormBuilder ){
    this.formularioContacto = this.form.group ({
      nombre: ['', [Validators. required, Validators.minLength(3)]],
      apellido: [''],
      tipoDni: [''],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe( value => {
      this.mostrarDni = value != "";
      this.tipoDni = value;
    });
  }

  ngOnDestroy(): void {
    
  }

  enviar(){ 
    console.log(this.formularioContacto)
   }

   hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
   }

}
