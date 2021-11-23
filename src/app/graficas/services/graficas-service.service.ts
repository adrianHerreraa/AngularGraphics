import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficasServiceService {

  constructor( 
    private http: HttpClient
  ) { }

  getSocialMediaUSers(){
    return this.http.get('http://localhost:3000/grafica');
  }

}
