import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {IMAGE_BASE_URL} from "../../shared/moviedb";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  buildImagePath(key: string) {
    return `${IMAGE_BASE_URL}${key}`;
  }

}
