import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import pagesMap from './pages';
import NotFound from '@pages/notFoundPage/404';

function RouterConfig({ history }) {
  const routers = pagesMap.map((v, i) => {
    return (
      <Route 
        exact 
        key={i} 
        path={v.path} 
        component={v.component} 
      />
    );
  });

  return (
    <Router history={history}>
      <Switch>
        {routers}
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
};

export default RouterConfig;
