import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';


const rootElement =
 document.getElementById('root');
ReactDOM.render(
  <Router>
<App/>
</Router>,
  rootElement
);
