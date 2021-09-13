import { apiList } from "../utils/api-list";
import { getData } from "../utils/api-service";
import { createContext, useState } from "react";

export const GenreContext = createContext({});

const GenreContextProvider = ({ children }) => {
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

  return (
    <GenreContext.Provider
      value={{ genres, popularList, getGenreList, getPopularList }}
    >
      {children}
    </GenreContext.Provider>
  );
};

export default GenreContextProvider;
