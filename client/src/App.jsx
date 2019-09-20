import React from "react";
import { Route } from "react-router-dom";

import Layout from "./components/Page/Layout";
import routes from "./pages/route";

import { hot } from "react-hot-loader";
function App() {
  return (
    <Layout>
      {routes.map((props, i) => (
        <Route key={i} {...props} />
      ))}
    </Layout>
  );
}

export default hot(module)(App);
