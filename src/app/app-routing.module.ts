import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {LoginComponent} from './login/login.component';
import {AppComponent} from '../app/app.component';
import { GenresComponent } from './genres/genres.component';

const routes: Routes = [
  {path: 'app', component:AppComponent},
  {path: '', component: MainComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'genres/:id', component:GenresComponent},


  {path: '**', redirectTo: ''}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
