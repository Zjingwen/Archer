import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import routerMap from './routes';
import NotFound from '@pages/notFoundPage/404';

function RouterConfig({ history }) {
  const routers = [];
  routerMap.forEach((value, index) => {
    routers.push(<Route key={value.path} path={value.path} exact component={value.component} />);
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
