import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {LoginComponent} from './login/login.component';
import {AppComponent} from '../app/app.component';

const routes: Routes = [
  {path: 'app', component:AppComponent},
  {path: 'main', component: MainComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'login', component: LoginComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
