import React from 'react';
import { render } from 'react-dom';
import './assets/main.css';
import './assets/style.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import Provider from './context';
import PageNotFound from './components/404';

let App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/currency-converter" component={Home} />
        <Route path="**" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

render(<Provider><App /></Provider>, document.getElementById('root'));