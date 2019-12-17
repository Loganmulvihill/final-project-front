import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
movies;
input;
imageUrl='https://image.tmdb.org/t/p/w500'
genres
  constructor(public _api: ApiService) { }

  ngOnInit() {
  }


  // onClick () {

  //   this._api.getApi(this.input) 
  //   .subscribe(result => {
  //     this.movies=result;
  //     console.log(this.movies)
  //   })



  }

  // onClickGenre (number) {

  //   this._api.getGenre(number) 
  //   .subscribe(result => {
  //     this.movies=result;
  //     console.log(this.movies)
  //   })



  // }



