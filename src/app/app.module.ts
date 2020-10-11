import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {AppRoutingModule} from "./modules/app-routing-module-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
