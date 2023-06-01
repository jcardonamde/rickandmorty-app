import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIUrl } from '../../environments/RYMApi';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(
    // Inyección de dependencias
    private http: HttpClient
  ) { }

  getEpisodes() {
    return this.http.get(APIUrl.episodes);
  }

  getEpisode(id: any) {
    return this.http.get(`${APIUrl.episodes}/${id}`);
  }
}
