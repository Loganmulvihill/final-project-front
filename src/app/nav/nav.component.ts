import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

movies;
input;
imageUrl= 'https://image.tmdb.org/t/p/w500'
genres

  constructor(public _api: ApiService) { }

  ngOnInit() {
  }


  onClick () {

    this._api.getApi(this.input) 
    .subscribe(result => {
      this.movies=result;
      console.log(this.movies)
    })



  }

}
