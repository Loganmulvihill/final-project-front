import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {LoginComponent} from './login/login.component';
import {AppComponent} from '../app/app.component';
import { GenresComponent } from './genres/genres.component';
import {NavComponent} from './nav/nav.component'
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'app', component:AppComponent},
  {path: 'home', component: MainComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'genres/:id', component:GenresComponent},
  {path: 'nav', component:NavComponent},


  {path: '**', redirectTo: 'home'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
