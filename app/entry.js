import React from 'react';
import { Provider } from 'react-redux';
import { render }  from 'react-dom';
import ForteApplication from './js/forte_application';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import PublicKeys from './js/public_keys'
import Servers from './js/servers';
import Dashboard from './js/dashboard'
import Store from './js/store';

render(
  <Provider store={Store}>
  <Router history={hashHistory}>
    <Route path="/" component={ForteApplication}>
      <IndexRoute component={Dashboard} />
      <Route path="/keys" component={PublicKeys} />
      <Route path="/servers" component={Servers} />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('container')
);
