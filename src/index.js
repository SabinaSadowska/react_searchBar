import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Post from './Post';
import * as serviceWorker from './serviceWorker';
import Menu from './components/menu/Menu';

ReactDOM.render(
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/post/:siteId" component={Post} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
