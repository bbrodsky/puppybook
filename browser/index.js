'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppiesContainer from './AllPuppiesContainer';
import store from "./store.js";
import { Provider } from "react-redux";
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import {getPuppies} from "./action-creators.js";

const onAppEnter = () => {
  store.dispatch(getPuppies());
}

ReactDOM.render(
  <div className="container flexbox-container">
    <div className="jumbotron">
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" onEnter={onAppEnter}>
            <IndexRedirect to="/puppies" />
            <Route path="/puppies" component={AllPuppiesContainer} />
          </Route>
        </Router>
      </Provider>
    </div>
  </div>,
  document.getElementById('app')
);
