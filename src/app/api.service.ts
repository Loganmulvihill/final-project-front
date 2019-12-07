import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl =

  `https://api.themoviedb.org/3/search/movie?api_key=dfe32bb528b8ce90d071c38103f1d0cb`

  constructor(public _http: HttpClient) { }


  getApi (query) {
    return this._http.get(`${this.baseUrl}&language=en-US&query=${query}&page=1&include_adult=false`) 
  }
  






}
