import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoGrande?: string;
  hermanoPequenio?: string;

  saludar(hermano: string){
    console.log(`Hola ${hermano}`);
  }

  preguntarPorHijo():string{
    return "¿Cómo estas tu hijo?";
  }

  getHermanoGrande():string{
    return this.hermanoGrande || "";
  }

  setHermanoGrande(nombre : string){
    this.hermanoGrande = nombre;
  }

  getHermanoPequenio():string{
    return this.hermanoPequenio || "";
  }

  setHermanoPequenio(nombre : string){
    this.hermanoPequenio = nombre;
  }

  
  constructor() { }
}
