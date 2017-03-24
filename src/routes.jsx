// @flow
import React from 'react';
import { Route } from 'react-router';
import App from 'containers/App';
import Home from 'pages/Home';
import About from 'pages/About';

const routes = (
  <Route component={App}>
    <Route path="/" components={Home} />
    <Route path="/about" components={About} />
    <Route
      path="/dynamic"
      getComponent={async (nextState, callback) => {
        try {
          const module = await import('pages/DynamicPage');
          callback(null, module.default);
        } catch (error) {
          callback(error, null);
        }
      }}
    />
  </Route>
);

export default routes;
