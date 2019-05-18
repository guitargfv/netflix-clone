import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';
import { UserService } from 'src/app/core/services/user.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  movieId: any;
  imageUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
  movie: Movie;
  constructor(private route: ActivatedRoute,
    private router: Router, private userService: UserService, private db: AngularFirestore) { }

  ngOnInit() {
    this.movie = this.route.snapshot.data.movie;
  }
  addBookmarks() {
    //TODO adicionar aos favoritos
    this.db.collection('favorite-movies').add({
      userId: this.userService.getUserId(),
      movieId: this.movie.id
    });
    this.router.navigate(['home', this.userService.getUserId()]);
  }

}
