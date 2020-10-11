import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Movie} from "../../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieStoreService {

  private readonly moviesSubject = new BehaviorSubject<Movie[]>([]);
  readonly movies$ = this.moviesSubject.asObservable();

  private get movies(): Movie[] {
    return this.moviesSubject.getValue();
  }

  private set movies(value: Movie[])  {
    this.moviesSubject.next(value);
  }

  setMovies(movies: Movie[]): void {
    this.movies = movies;
  }

  filterByVoteCount(): void {
    this.movies = [...this.movies].sort((a, b) => b.vote_count - a.vote_count);
  }

  filterByTitle(): void {
    this.movies = [...this.movies].sort((a, b) => a.title.localeCompare(b.title));
  }

  constructor() { }
}
