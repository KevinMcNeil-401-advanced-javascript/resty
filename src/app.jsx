import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header.jsx';
import Nav from './nav.jsx';
import Form from './form.jsx';
import History from './history.jsx';
import Help from './help.jsx';
import Foooter from './footer.jsx';

function app() {
  return (
    <Router>
      <div>
        <Route path="/">
          <Header />
          <Nav />
        </Route>
        <Switch>
          <Route path="/form" component={Form} />
          <Route path="/history" exact component={History} />
          <Route path="/help" exact component={Help} />
        </Switch>
        <Foooter />
      </div>
    </Router >
  );
}



export default app;