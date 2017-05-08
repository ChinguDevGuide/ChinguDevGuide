import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './style/style.scss';

import Main from './components/Main';


ReactDOM.render(
  <BrowserRouter>
    <Main></Main>
  </BrowserRouter>,
  document.getElementById('root')
)
