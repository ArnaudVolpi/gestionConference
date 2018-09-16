import { Injectable } from '@angular/core';

import { ApiService } from './api/api.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataRenderService {

  constructor(private api: ApiService) {
  }

  // Récupère toutes les professions 
  allProfessions(): Observable<any[]> {
    return this.api.getAllProfessions();
  }

  // Récupère toutes les professions 
  allUsers(): Observable<any[]> {
    return this.api.getAllUsers();
  }
  // Récupère toutes les professions 
  allSeminaire(): Observable<any[]> {
    return this.api.getAllSeminaire();
  }



}
