import React from 'react';
import { Route } from 'react-router';

import * as AppPage from './pages';

export default (
  <Route component={AppPage.AppPage}>
    <Route component={AppPage.IndexPage} path="/" />
    <Route component={AppPage.ButtonPage} path="/btn" />
  </Route>
);
