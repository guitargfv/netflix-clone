import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { MoviesComponent } from './core/home/movie-list/movies/movies.component';
import { MoviesResolver } from './core/home/movie-list/movies/movies.resolve';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignupComponent } from './core/signup/signup.component';

const routes: Routes = [
  { path: 'home/:id', component: HomeComponent, },
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  {
    path: 'signup',
    component: SignupComponent, canActivate: [AuthGuard]
  },
  {
    path: 'movies/:id', component: MoviesComponent, resolve: {
      movie: MoviesResolver
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
