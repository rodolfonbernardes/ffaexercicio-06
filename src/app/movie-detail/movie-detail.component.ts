import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../../models/movie";
import {MovieService} from "./movie.service";
import {IMAGE_BASE_URL} from "../../shared/moviedb";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  public movie: Movie;
  public isLoadingMovie: boolean;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.loadMovie(params['id']));
  }

  private loadMovie(id: number) {
    this.isLoadingMovie = true;
    this.movieService.loadMovie(id)
      .subscribe((movie: Movie) => {
        this.movie = movie;
        this.isLoadingMovie = false;
      });
  }

  buildImagePath(key: string) {
    return `${IMAGE_BASE_URL}${key}`;
  }

}
