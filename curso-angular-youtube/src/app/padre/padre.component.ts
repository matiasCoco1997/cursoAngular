import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  
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
