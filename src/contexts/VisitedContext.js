import cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const RecentlyVisitedContext = createContext({});

const RecentlyVisitedContextProvider = ({ children }) => {
  const [recently, setRecently] = useState();

  useEffect(() => {
    if (cookies.get("recently")) {
      setRecently(JSON.parse(cookies.get("recently")));
    }
  }, []);

  useEffect(() => {
    if (recently) cookies.set("recently", JSON.stringify(recently));
  }, [recently]);

  return (
    <RecentlyVisitedContext.Provider
      value={{
        recently,
        setRecently,
      }}
    >
      {children}
    </RecentlyVisitedContext.Provider>
  );
};

export default RecentlyVisitedContextProvider;
