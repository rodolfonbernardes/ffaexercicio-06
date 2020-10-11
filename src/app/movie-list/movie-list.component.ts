import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Movie, MovieDbResult} from "../../models/movie";
import {MovieListService} from "./movie-list.service";
import {MovieStoreService} from "../store/movie-store.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnChanges {

  @Input() filter: string;
  @Input() order: string;

  static_list: Movie[] = [];

  constructor(private movieListService: MovieListService, public moviesStore: MovieStoreService) { }

  ngOnInit(): void {
    this.movieListService.loadMovieList(this.filter)
      .subscribe(
        (result: MovieDbResult) => {
          this.static_list = result.results;
          // this.list = result.results;
          this.moviesStore.setMovies(result.results);
        }
      );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.filter);
    console.log(this.filter);

    if(changes.filter && changes.filter.previousValue !== changes.filter.currentValue) {
      this.moviesStore.setMovies(
        this.static_list.filter((m: Movie) => { return m.title.includes(this.filter); })
      );
    }

    if(changes.order && changes.order.previousValue !== changes.order.currentValue) {
      if (this.order === 'titulo') {
        this.moviesStore.filterByTitle();
      } else if(this.order === 'votos') {
        this.moviesStore.filterByVoteCount()
      }

    }

  }

}
