import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { MoviesComponent } from './core/home/movie-list/movies/movies.component';
import { MoviesResolver } from './core/home/movie-list/movies/movies.resolve';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'movies/:id', component: MoviesComponent, resolve: {
    movie: MoviesResolver
}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
