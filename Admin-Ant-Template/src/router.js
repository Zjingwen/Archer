import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import routerMap from './routes';

function RouterConfig({ history }) {
  const routers = [];
  routerMap.forEach((value, index) => {
    routers.push(<Route key={value.path} path={value.path} exact component={value.component} />);
  });
  return (
    <Router history={history}>
      <Switch>
        {routers}
      </Switch>
    </Router>
  );
};

export default RouterConfig;
