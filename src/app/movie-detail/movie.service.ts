import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../../models/movie";
import {HttpClient} from "@angular/common/http";
import {API_KEY, BASEURL} from "../../shared/moviedb";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  loadMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${BASEURL}movie/${id}?api_key=${API_KEY}`);
  }
}

