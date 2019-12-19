import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  // favorites: any []; 
  // = [];
  baseUrl: string = "http://localhost:3000/api/appUsers/"; 
  // appUserUrl: string = "appUsers/" 
  // May have to put / on appusers the end if not working
  // loginUrl: string = "appUsers/login"
  moviesUrl: string = "/appUsers/{id}/movies";
  favoriteUrl: string = `http://localhost:3000/api/appUsers/{id}/movies`;
 
  
  // isLoggedIn : boolean = false;
  // firstName: string = '';

  constructor(private _http: HttpClient, private router: Router) { }

  movies;

addFavorites(movie:any) {
  const userId = sessionStorage.getItem("userId");
    return this._http.post(`${this.baseUrl}${userId}/movies`, {movie});
    
  }




  returnFavorites(){
    const userId = sessionStorage.getItem("userId");
    return this._http.get(`${this.baseUrl}${userId}/movies`).subscribe(res => {
      this.movies=res; 
      console.log(this.movies)
      this.router.navigate(['/favorites'])
    })
  }


  // movies() {
  //   let token = sessionStorage.getItem("token")
  //   console.log("token", token)
  //   this._http.get(this.baseUrl + this.moviesUrl + &token= )
  //   .subscribe(
  //     res => console.log("res", res)

  //   )}
}