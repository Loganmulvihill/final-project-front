import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  favorites: any = [];
  movies;
  number;
  baseUrl =

  `https://api.themoviedb.org/3/search/movie?api_key=dfe32bb528b8ce90d071c38103f1d0cb`

  genreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=dfe32bb528b8ce90d071c38103f1d0cb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=`
  // ?language=en-US&api_key=dfe32bb528b8ce90d071c38103f1d0cb`
  genreList = `https://api.themoviedb.org/3/genre/movie/list?api_key=dfe32bb528b8ce90d071c38103f1d0cb&language=en-US`

  // currentGenre: []

  constructor(public _http: HttpClient) { }


  getApi (query) {
    console.log("api query:", query)
      this._http.get(`${this.baseUrl}&language=en-US&query=${query}&page=1&include_adult=false`)   
      .subscribe(result => {
        this.movies=result;
        console.log(this.movies)
      })
  }

  

 getGenre (number) {
    this._http.get(`${this.genreUrl}${number}`)
   .subscribe(result => {
    this.movies=result;
    console.log(this.movies)
  })
 }



 

 



// }



//  getMoviesByGenre(){
//   let genreRequest = this.genreUrl + this.genreList.genreID; 
//   this._http.get(genreRequest).subscribe( data => {
//       this.currentGenre = data
//   })
// }




// }
}