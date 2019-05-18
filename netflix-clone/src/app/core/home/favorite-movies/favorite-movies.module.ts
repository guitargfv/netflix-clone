import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteMoviesComponent } from './favorite-movies.component';

@NgModule({
  declarations: [FavoriteMoviesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FavoriteMoviesComponent
  ]
})
export class FavoriteMoviesModule { }
