import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie, MovieDbResult} from "../../models/movie";
import {API_KEY, BASEURL} from "../../shared/moviedb";

@Injectable({
  providedIn: 'root'
})
export class MovieListService {


  // static _withBaseUrl(path) {
  //   return `https://api.themoviedb.org/3/${path}?api_key=${MoviesService.API_KEY}`;
  // }

  constructor(private http: HttpClient) { }

  private buildUrl(filter: string): string {
    const url = `${BASEURL}movie/popular?api_key=${API_KEY}`;
    return filter ? url + `${filter}` : url;
  }

  loadMovieList(filter: string): Observable<MovieDbResult> {
    return this.http.get<MovieDbResult>(this.buildUrl(filter));
  }
}
