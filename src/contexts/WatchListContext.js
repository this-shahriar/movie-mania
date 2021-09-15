import cookies from "js-cookie";
import { useToast } from "@chakra-ui/toast";
import { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext({});

const WatchListContextProvider = ({ children }) => {
  const toast = useToast();
  const [watchList, setWatchList] = useState();

  useEffect(() => {
    if (cookies.get("watchlist")) {
      setWatchList(JSON.parse(cookies.get("watchlist")));
    }
  }, []);

  useEffect(() => {
    if (watchList) cookies.set("watchlist", JSON.stringify(watchList));
  }, [watchList]);

  return (
    <WatchListContext.Provider
      value={{
        watchList,
        setWatchList,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextProvider;
