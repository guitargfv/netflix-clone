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
  imageUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
  movie: Movie;
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.movie = this.route.snapshot.data.movie;
  }
  addBookmarks() {
    console.log('Filmes', this.movie);
  }

}
