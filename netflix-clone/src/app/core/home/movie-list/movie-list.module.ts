import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    MoviesModule
  ],
  exports: [MovieListComponent]
})
export class MovieListModule { }
