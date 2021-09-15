import Genres from "../pages/Genres";
import MovieDetails from "../pages/MovieDetails";
import Movies from "../pages/Movies";
import WatchList from "../pages/WatchList";

export const commonRoutes = [
  { id: 1, path: "/movies", component: Movies },
  { id: 2, path: "/genres/:id/:name", component: Genres },
  { id: 3, path: "/movies/:id", component: MovieDetails },
  { id: 4, path: "/watchlist", component: WatchList },
];
