import { apiList } from "../utils/api-list";
import { getData } from "../utils/api-service";
import { createContext, useState } from "react";
import { useToast } from "@chakra-ui/toast";

export const GenreContext = createContext({});

const GenreContextProvider = ({ children }) => {
  const toast = useToast();
  const [genres, setGenres] = useState();
  const [popularList, setPopularList] = useState();

  const getGenreList = async () => {
    const res = await getData({
      query: apiList.MOVIE_GENRE_LIST,
    });
    if (res?.data?.genres) {
      setGenres(res.data.genres);
    }
  };

  const getPopularList = async () => {
    const res = await getData({
      query: apiList.GET_POPULAR,
    });
    if (res?.data?.results) {
      setPopularList(res.data.results);
    }
  };

  const getMoviesByGenre = async (id) => {
    const res = await getData({
      query: apiList.DISCOVER_MOVIES,
      params: {
        with_genres: id,
      },
    });
    if (res?.data?.results) return res.data.results;
    else toast({ title: "Failed to load genre", position: "top" });
  };

  return (
    <GenreContext.Provider
      value={{
        genres,
        popularList,
        getGenreList,
        getPopularList,
        getMoviesByGenre,
      }}
    >
      {children}
    </GenreContext.Provider>
  );
};

export default GenreContextProvider;
