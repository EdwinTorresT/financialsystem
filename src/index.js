import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/styles/index.scss";
import App from './App';
import * as serviceWorker from './serviceWorker';
//styles imports
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.register();
