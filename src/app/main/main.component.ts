import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { Router } from '@angular/router'
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
movies;
input;
imageUrl='https://image.tmdb.org/t/p/w500'
  constructor(public _api: ApiService, private router: Router, private _movie: MovieService) { }

  ngOnInit() {
  }


  // onClick () {

  //   this._api.getApi(this.input) 
  //   .subscribe(result => {
  //     this.movies=result;
  //     console.log(this.movies)
  //   })


  addMovie(movie){
    this._movie.addFavorites(movie).subscribe( (res: any) => {
      console.log(res)

    // console.log(movie)
    })


    // this.goTofavorites();
  
}

// goTofavorites() {
//   this.router.navigate(['/favorites'])

// }

  

  onClickGenre (number) {

    this._api.getGenre(number) 
  
  }

}



