import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  // Creación de propiedades
  Character:any = [];

  constructor(
    private routeActive: ActivatedRoute,
    private charService: CharactersService
  ) { }

  ngOnInit() {
    // Variable donde almacenamos el valor del ID elegido
    const id = this.routeActive.snapshot.paramMap.get('id'); // Obtiene el valor que le indiquemos
    console.log(id);
    this.charService.getCharacter(id).subscribe(char => {
      console.log(char);
      this.Character = char;
    })
  }
}
