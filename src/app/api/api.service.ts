import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

//Rxjs
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const API_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }


  // API: GET /professions
  public getAllProfessions(): Observable<any[]> {
    return this.http
      .get(API_URL + '/professions')
      .pipe(
        //Response
        map(response => {
          const professions = response.json();
          //Transforme réponse de l'api en tableau 
          return professions.map((profession) => profession);
        }
          //If error
          , catchError(err => of("error found", err))
        )
      )
  }

  // API: GET /users
  public getAllUsers(): Observable<any[]> {
    return this.http
      .get(API_URL + '/users')
      .pipe(
        //Response
        map(response => {
          const users = response.json();
          //Transforme réponse de l'api en tableau 
          return users.map((user) => user);
        }
          //If error
          , catchError(err => of("error found", err))
        )
      )
  }

  // API: GET /seminaire
  public getAllSeminaire(): Observable<any[]> {
    return this.http
      .get(API_URL + '/seminaire')
      .pipe(
        //Response
        map(response => {
          const seminaire = response.json();

          //Retourne obj au lieu de array
          // Si contre solution patch,mais à revoir
          var array=[];
          array.push(seminaire)
          return array;

          
          //Transforme réponse de l'api en tableau
          //return seminaire.map((seminaire) => seminaire);
        }
          //If error
          , catchError(err => of("error found", err))
        )
      )
  }


}
