import React from 'react';

import ReactDOM from 'react-dom/client'
import { App } from './app/App';

const { app } = window.require('electron');

console.log(111, app)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)