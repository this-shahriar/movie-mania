import { Flex } from "@chakra-ui/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { commonRoutes } from "../utils/routes";
import {
  Route,
  Switch,
  HashRouter,
  Redirect,
  withRouter,
} from "react-router-dom";
import GenreContextProvider from "../contexts/GenreContext";
import { useEffect } from "react";

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
    <GenreContextProvider>
      <HashRouter>
        <Flex minH="100vh" direction="column">
          <Header />
          <Flex flexGrow="1">
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
                <Route exact key="100" path="/">
                  <Redirect to="/movies" />
                </Route>
              </Switch>
            </ScrollToTop>
          </Flex>
          <Footer />
        </Flex>
      </HashRouter>
    </GenreContextProvider>
  );
};

export default App;
