import { createContext } from "react";
import { apiList } from "../utils/api-list";
import { useToast } from "@chakra-ui/toast";
import { getData } from "../utils/api-service";

export const MovieDetailContext = createContext({});

const MovieDetailContextProvider = ({ children }) => {
  const toast = useToast();

  const getMovieDetails = async (id) => {
    const res = await getData({ query: apiList.MOVIE_DETAILS + id });

    if (res?.data) return res.data;
    else toast({ title: "Failed to get details", position: "top" });
  };

  const getMovieCredits = async (id) => {
    const query = apiList.MOVIE_DETAILS + id + apiList.CREDITS_s;
    const res = await getData({ query });

    if (res?.data) return res.data;
    else toast({ title: "Failed to get credits", position: "top" });
  };

  const getRelatedMovies = async (id) => {
    const query = apiList.MOVIE_DETAILS + id + apiList.SIMILAR_s;
    const res = await getData({ query });

    if (res?.data) return res.data;
    else toast({ title: "Failed to get related movies", position: "top" });
  };

  return (
    <MovieDetailContext.Provider
      value={{ getMovieDetails, getMovieCredits, getRelatedMovies }}
    >
      {children}
    </MovieDetailContext.Provider>
  );
};

export default MovieDetailContextProvider;
