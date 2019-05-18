import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  movieId: any;
  key = '?api_key=845199944a6f9293caee462b891cfe60';
  imageUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
  movie: Movie;
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(movieId => {
      this.moviesService.getMovies(movieId.id + this.key)
        .subscribe(movie => this.movie = movie);
    });
  }

}
