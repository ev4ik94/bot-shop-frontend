import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from "./Routing";


import "antd/dist/antd.css"
import './assets/styles/style.scss'
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);


