import {
  Route,
  Switch,
  Redirect,
  HashRouter,
  withRouter,
  BrowserRouter,
} from "react-router-dom";
import { useEffect } from "react";
import { Flex } from "@chakra-ui/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { commonRoutes } from "../utils/routes";
import GenreContextProvider from "../contexts/GenreContext";
import MovieDetailContextProvider from "../contexts/MovieDetailsContext";
import PageNotFound from "./404";
import WatchListContextProvider from "../contexts/WatchListContext";
import RecentlyVisitedContextProvider from "../contexts/VisitedContext";

const ScrollToTop = withRouter(({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <>{children}</>;
});

const App = () => {
  return (
    <WatchListContextProvider>
      <RecentlyVisitedContextProvider>
        <GenreContextProvider>
          <MovieDetailContextProvider>
            <HashRouter>
              <Flex bg="dark.500" minH="100vh" direction="column">
                <Header />
                <Flex flexGrow="1" maxW="1920px" m="auto">
                  <ScrollToTop>
                    <Switch>
                      {commonRoutes.map((route) => (
                        <Route
                          exact
                          key={route.id}
                          path={route.path}
                          component={route.component}
                        />
                      ))}
                      <Route exact path="/">
                        <Redirect to="/movies" />
                      </Route>
                      <Route path="*" component={PageNotFound} />
                    </Switch>
                  </ScrollToTop>
                </Flex>
                <Footer />
              </Flex>
            </HashRouter>
          </MovieDetailContextProvider>
        </GenreContextProvider>
      </RecentlyVisitedContextProvider>
    </WatchListContextProvider>
  );
};

export default App;
