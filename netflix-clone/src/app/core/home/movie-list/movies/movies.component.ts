import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/shared/models/movie';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  movieId: any;
  imageUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
  movie: Movie;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.movie = this.route.snapshot.data.movie;
  }
  addBookmarks() {
    //TODO adicionar aos favoritos
    console.log('Filmes', this.movie);
    this.router.navigate(['home', this.userService.getUserId()]);
  }

}
