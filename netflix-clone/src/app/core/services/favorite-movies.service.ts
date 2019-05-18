import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {
  movies = [];
  constructor(private db: AngularFirestore, private userService: UserService) { }

  getFavoriteMovies() {
    const userId = this.userService.getUserId();
    return this.db.collection('favorite-movies',
      ref => ref.where('userId', '==', userId))
      .valueChanges();
  }


}
