'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppiesContainer from './AllPuppiesContainer';
import store from "./store.js";
import { Provider } from "react-redux";
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import {getPuppies, getServerSinglePuppy} from "./action-creators.js";
import SinglePuppyContainer from "./SinglePuppyContainer.js";

const onAppEnter = () => {
  store.dispatch(getPuppies());
}

const onEnterGetSinglePuppy = (nextRouterState) => {
  store.dispatch(getServerSinglePuppy(nextRouterState.params.puppyId));
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
          <Route path="/puppies/:puppyId" component={SinglePuppyContainer} onEnter={onEnterGetSinglePuppy}/>
        </Router>
      </Provider>
    </div>
  </div>,
  document.getElementById('app')
);
