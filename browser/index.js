'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppiesContainer from './AllPuppiesContainer';
import store from "./store.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <div className="container flexbox-container">
    <div className="jumbotron">
      <Provider store={store}>
        <AllPuppiesContainer />
      </Provider>
    </div>
  </div>,
  document.getElementById('app')
);
