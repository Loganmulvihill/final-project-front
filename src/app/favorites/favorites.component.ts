import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(private _movieService: MovieService, private router: Router) { }

  ngOnInit() {
  }

}
