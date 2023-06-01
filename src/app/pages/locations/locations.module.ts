import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationsPageRoutingModule } from './locations-routing.module';
import { CharactersPageRoutingModule } from '../characters/characters-routing.module';

import { LocationsPage } from './locations.page';
import { CharactersService } from '../../services/characters.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationsPageRoutingModule,
    CharactersPageRoutingModule
  ],
  declarations: [LocationsPage],
  providers: [CharactersService] // Agrego el servicio de Characters
})
export class LocationsPageModule {}
