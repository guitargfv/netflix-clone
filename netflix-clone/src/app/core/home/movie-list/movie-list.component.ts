import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies = [];
  imageUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
  @Input() url: string;
  @Input() category: string;

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies(this.url)
      .subscribe(value => {
        this.movies = value.results;
        console.log(this.movies)
      });
  }

  printMovie(movie: Movie) {
    this.router.navigate(['movies', movie.id]);
  }

}
