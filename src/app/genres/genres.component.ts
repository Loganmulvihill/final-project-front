import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  constructor( public _api: ApiService, public _router: Router) { }

  ngOnInit() {
  }

genreClick(genreId:number) {
  this._router.navigate(['genres', genreId])


}

}
