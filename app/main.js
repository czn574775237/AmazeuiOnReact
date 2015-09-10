import React from 'react';
import { Router } from 'react-router';
import { createHashHistory } from 'history';
import routes from './routes';
import '../styles/index.less';


React.render(
  <Router history={createHashHistory()} children={routes} />,
  document.getElementById('app')
);
