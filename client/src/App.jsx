import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/Page/Layout";
import routes from "./pages/route";

import { hot } from "react-hot-loader";
function App() {
  return (
    <Layout>
      <Switch>
        {routes.map((props, i) => (
          <Route key={i} {...props} />
        ))}
      </Switch>
    </Layout>
  );
}

export default hot(module)(App);
