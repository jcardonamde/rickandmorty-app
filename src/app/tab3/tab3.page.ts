import { Component } from '@angular/core';
import { LocationsService } from '../services/locations.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  // Creando una propiedad
  Locations:any = [];

  constructor(
    // Acceder a las funciones del servicio de Locations
    private LocService: LocationsService
  ) {}

  // Inicializar las funciones creadas par el servicio
  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    // Acceder al servicio y llamar a la funcion getLocations
    this.LocService.getLocations().subscribe(location => {
      console.log(location);
      this.Locations = location;
    })
  }

}
