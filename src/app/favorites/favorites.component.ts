import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

//   movie = {
//     id: "4faf56apjf39",
//     userId: "3afsdjk212gl3af",
//     title: "Javascript the wierd parts",
    
//  }


  constructor(private _movieService: MovieService, private router: Router) { }

  ngOnInit() {
  }

  // pushMovie(){
  //   this._movieService.addFavorites(this.movie).subscribe( (res:any)=> { 
  //     console.log(res)
  //     sessionStorage.setItem('token', res.token);
  //     sessionStorage.setItem('userId', res.userId);
  //     this._movieService.firstName = res.firstName;
  //     this._movieService.isLoggedIn = true;
  //     this.goToDash();
  //   })






}
