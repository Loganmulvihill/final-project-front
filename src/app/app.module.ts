import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import {FormsModule} from '@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service'
import { MovieService } from './movie.service';
import { GenresComponent } from './genres/genres.component';
import { NavComponent } from './nav/nav.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FavoritesComponent,
    LoginComponent,
    RegisterComponent,
    GenresComponent,
    NavComponent,
    MovieDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
