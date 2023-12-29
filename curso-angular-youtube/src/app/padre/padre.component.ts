import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

  valorContador : number = 0;

  incrementar(){
    this.valorContador++;
  }

  decrementar(){
    this.valorContador--;
  }

}
