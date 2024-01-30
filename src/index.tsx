import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.sass';
import Main from './scenes/Auth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
