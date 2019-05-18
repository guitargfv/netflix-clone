import { Component, OnInit } from '@angular/core';
import { FavoriteMoviesService } from '../services/favorite-movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  urlPopularMovies = 'popular?api_key=845199944a6f9293caee462b891cfe60&page=1';
  urlTopRated = 'top_rated?api_key=845199944a6f9293caee462b891cfe60&page=1';
  urlUpcoming = 'upcoming?api_key=845199944a6f9293caee462b891cfe60&page=1';
  favoriteMovies = [];


  constructor(private favoriteMoviesService: FavoriteMoviesService) { }

  ngOnInit() {
    this.favoriteMoviesService.getFavoriteMovies().subscribe(movies => this.favoriteMovies = movies);

  }

}
