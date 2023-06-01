import { Component } from '@angular/core';
import { EpisodesService } from '../services/episodes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // Creando una propiedad
  Episodes:any = [];

  constructor(
    // Acceder a las funciones de mi servicio
    private EpiService: EpisodesService
  ) {}

  // Inicializar las funciones creadas
  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes() {
    // Acceder al servicio y llamar a la funcion getEpisodes
    this.EpiService.getEpisodes().subscribe(epi => {
      console.log(epi);
      this.Episodes = epi;
    })
  }

}
