import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIUrl } from '../../environments/RYMApi';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(
    // Inyección de dependencias
    private http: HttpClient
  ) { }

  // Generar función
  getLocations() {
    // Como es un servicio a consumir retornamos el valor
    return this.http.get(APIUrl.locations);
  }

  // Método para obtener información del Personaje por Id
  getLocation(id: any) {
    return this.http.get(`${APIUrl.locations}/${id}`);
  }
}
