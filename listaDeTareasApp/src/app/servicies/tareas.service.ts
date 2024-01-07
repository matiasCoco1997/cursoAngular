import { Injectable } from '@angular/core';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = "listaTareas";

  getTareas ():string[] {
    if (typeof localStorage !== 'undefined') {
      const storedData = localStorage.getItem(this.localStorageKey);
      return storedData ? JSON.parse(storedData) : [];
    } else {
      return [];
    }
  }

  agregarTarea ( tarea: string ) {
    if (typeof localStorage !== 'undefined') {
      const tareas = this.getTareas();
      tareas.push(tarea);
      localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
    }
  }

  eliminarTarea( index: number ){
    if (typeof localStorage !== 'undefined') {
      const tareas = this.getTareas();
      tareas.splice(index, 1);
      localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
    }
  }

}
