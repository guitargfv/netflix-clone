
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';


@Injectable({ providedIn: 'root' })
export class MovieListResolver implements Resolve<Observable<any>>{

  constructor(private service: MoviesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params.id;
    return this.service.getMoviesById(id);
  }

}
