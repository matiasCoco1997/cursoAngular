import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit {

  nombre?: string;

  constructor( private _servicioFamiliar: ServicioFamiliarService ){

  }

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande("Juan");
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }

  
  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequenio() || '');
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }
  






  mensajePadre :string = 'Mensaje desde el padre';
  mensajeRecibido: string = '';

  recibirMensaje($event:string){
    this.mensajeRecibido = $event;
  }


//contador
  valorContador : number = 0;
  
  incrementar(){
    this.valorContador++;
  }

  decrementar(){
    this.valorContador--;
  }

  
}
