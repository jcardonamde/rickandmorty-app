import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../services/locations.service';
import { ActivatedRoute } from '@angular/router';
// import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  // Creación de propiedades y métodos existentes del componente
  Locations:any = [];
  //characters:any = []; // Aquí almacenare los personajes desde el servicio

  constructor(
    private locationService: LocationsService,
    private routeActive: ActivatedRoute,
    // private characterService: CharactersService
  ) { }

  ngOnInit() {
    // Variable donde almacenamos el valor del ID del episodio
    const id = this.routeActive.snapshot.paramMap.get('id');
    console.log(id);
    this.locationService.getLocation(id).subscribe(location => {
      console.log(location);
      this.Locations = location;
    });

    // Obtén los personajes desde el servicio
    // this.characterService.getCharacters().subscribe(characters => {
    //   this.characters = characters as any[];
    // });

    // this.characterService.getCharacters().pipe(
    //   map((response: any) => response.results)
    // ).subscribe((characters) => {
    //   this.characters = characters as any[];
    // });

    // const idChar = this.routeActive.snapshot.paramMap.get('id'); // Obtiene el valor que le indiquemos
    // console.log(id);
    // this.characterService.getCharacter(idChar).subscribe(char => {
    //   console.log(char);
    //   this.characterService = char as any[];
    // })
  }

  chunkArray(array: any[], size: number): any[][] {
    if (!Array.isArray(array)) {
      return []; // Retorna un array vacío si el argumento no es un array válido
    }
  
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
  
  // getCharactersByLocation(locationId: string): any[] {
  //   return this.characters.filter(character => character.locationId === locationId);
  // }

  // getResidentImage(resident: any): string {
  //   if (resident && resident.characterId) {
  //     // Buscar el personaje correspondiente al residente por su ID
  //     const character = this.characters.find(
  //       (character) => character.id === resident.characterId
  //     );
  
  //     if (character && character.image) {
  //       return character.image;
  //     }
  //   }
  
    // O retorna una URL predeterminada si no se encuentra el personaje o la imagen
    //return '';
  
  
}
