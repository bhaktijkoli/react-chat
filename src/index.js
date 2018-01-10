window.$ = window.jQuery = require('jquery');
require('./scripts/bootstrap.min');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import styles from './scss/app.scss';

ReactDOM.render(<App/>, document.getElementById('root'));
