export interface MovieDbResult {
  results: Movie[];
}

export interface Movie {
  // name: string;
  // img: string;

  title: string;
  poster_path: string;
  vote_count: number;
  id: number;

  overview: string;

}
