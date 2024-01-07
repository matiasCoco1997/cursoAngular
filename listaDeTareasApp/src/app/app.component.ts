import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService } from './servicies/tareas.service';
import { Tarea } from './servicies/tarea';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  listaTareas: string[] = [];
  nuevaTarea: string = ""; //Este parametro llega desde el html con el [(ngModel)]

  private _tareasService = inject(TareasService); //esta es la manera de inyectar dependencias en angular 17


  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas();
  }

  agregarTarea(){
    this._tareasService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = "";
    this.listaTareas = this._tareasService.getTareas();
  }

  eliminarTarea(index: number){
    this._tareasService.eliminarTarea(index);
    this.listaTareas = this._tareasService.getTareas();
  }

}
