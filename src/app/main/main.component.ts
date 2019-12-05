import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
videos;
  constructor(public _api: ApiService) { }

  ngOnInit() {
  }


  onClick () {

    this._api.getApi() 
    .subscribe(res => {
      this.videos=res;
      console.log(this.videos)
    })



  }

}
