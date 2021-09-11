import Header from "../components/Header";
import { commonRoutes } from "../utils/routes";
import { HashRouter, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import { Flex } from "@chakra-ui/layout";

const App = () => {
  return (
    <HashRouter>
      <Flex minH="100vh" direction="column">
        <Header />
        <Flex flexGrow="1">
          <Switch>
            {commonRoutes.map((route) => (
              <Route
                exact
                key={route.id}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Flex>
        <Footer />
      </Flex>
    </HashRouter>
  );
};

export default App;
