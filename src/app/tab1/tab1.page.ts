import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // Asignando un propiedad
  Characters:any = [];

  constructor(
    // Acceder a las funciones de mi servicio
    private charService: CharactersService
  ) {}

  // Inicializar las funciones creadas
  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    // Suscribiendonos a un observable
    this.charService.getCharacters().subscribe(characters => {
      console.log(characters);
      this.Characters = characters; // Con esto podemos enviar los valores a la vista
    })
  }
}
