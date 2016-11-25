'use strict';
import React from 'react';
import {render} from 'react-dom';
import Navigator from '../navigator/navigator.jsx';
import styles from './home.css';

let Home = (props) => (
  <div>
    <Navigator />
    <h1> Home </h1>
  </div>
);

export default Home;
