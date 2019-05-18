import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MovieListModule } from './movie-list/movie-list.module';
import { FavoriteMoviesModule } from './favorite-movies/favorite-movies.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MovieListModule,
    FavoriteMoviesModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
