import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css'
})
export class HermanoComponent implements OnInit{

  nombre?: string;


  constructor( private _servicioFamiliar: ServicioFamiliarService ){

  }

  _servicioFamiliar2 = inject(ServicioFamiliarService); //otra forma de injectar las dependencias

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoPequenio("Pedro");
    this.nombre = this._servicioFamiliar.getHermanoPequenio();
  }

  
  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande() || '');
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }
  
}
