import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIUrl } from '../../environments/RYMApi';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    // Inyección de dependencias
    private http: HttpClient
  ) { }

  // Generar función
  getCharacters() {
    //Aqui verificamos si requerimos encabezados
    return this.http.get(APIUrl.characters); // Como es un servicio a consumir retornamos el valor
  }

  // Método para obtener información del Personaje por Id
  getCharacter(id: any) {
    return this.http.get(`${APIUrl.characters}/${id}`);
  }
}
