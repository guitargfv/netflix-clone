import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {

  imageUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
  @Input() favoriteMovies = []
  movies = [];
  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.favoriteMovies.forEach(value => {
      this.setMovies(value);
    });
  }

  setMovies(movie) {
    this.moviesService.getMoviesById(movie.movieId)
      .subscribe(value => {
        this.movies.push(value);
      });
  }
  printMovie(movie: Movie) {
    this.router.navigate(['movies', movie.id]);
  }

}
