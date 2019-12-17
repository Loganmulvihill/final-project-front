import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
query;
movies;
input;
imageUrl= 'https://image.tmdb.org/t/p/w500'
genres

  constructor(public _api: ApiService) { }

  ngOnInit() {
  }

  search() {
    console.log(this.query)
    this._api.getApi(this.query)


  }


}
