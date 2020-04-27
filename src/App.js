import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

import history from "./utils/history";
import PageHome from "./pages/home";
import PageAbout from "./pages/about";
import PageSearch from "./pages/search";

const App = () => {
  return (
    <React.Fragment>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route exact path="/search" component={PageSearch} />
          <Route exact path="/about" component={PageAbout} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
