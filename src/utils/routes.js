import Genres from "../pages/Genres";
import Movies from "../pages/Movies";

export const commonRoutes = [
  { id: 1, path: "/movies", component: Movies },
  { id: 2, path: "/genres/:id", component: Genres },
];
