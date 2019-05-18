import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MovieListModule } from './movie-list/movie-list.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MovieListModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
