// @flow
import React from 'react';
import { Route } from 'react-router';
import App from 'containers/App';
import Home from 'pages/Home';

const routes = (
  <Route component={App}>
    <Route path="/test" />
    <Route path="/" components={Home} />
  </Route>
);

export default routes;
