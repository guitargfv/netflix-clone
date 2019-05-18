import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  key = '?api_key=845199944a6f9293caee462b891cfe60';
  constructor(private http: HttpClient) { }

  getMovies(url: string): Observable<any> {
    return this.http.get(environment.apiUrl + url);
  }
  getMoviesById(id: string): Observable<any> {
    return this.http.get(environment.apiUrl + id + this.key);
  }
}
