import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  guardar(id: string, paraGuardar: any) {
    const ParaGuardarJOSON = JSON.stringify(paraGuardar);
    localStorage.setItem(id, ParaGuardarJOSON);
  }

  leer(id: string) {
    const paraLeerJSON = localStorage.getItem(id)
    if (paraLeerJSON) {
      const paraLeer = JSON.parse(paraLeerJSON);
      return paraLeer;
    } else {
      return null;
    }
  }

  borrar(id: string) {
    localStorage.removeItem(id);
    console.log('Eliminado' + id);
  }
}
