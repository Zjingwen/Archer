import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import routerMap from './pages';
import NotFound from '@pages/notFoundPage/404';

/**
 * 将model注册到app中
 * @param {function} app app实例方法
 * @param {object} model model对象
 */
function registerModel(app, model){
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model);
  }
};

/**
 * 设置路由
 * @param {object} b       参数集合
 * @param {object} b.value 实际配置对象
 * @param {object} b.root  根路径
 * @param {object} b.app   app实例方法，供registerModel使用
 * @returns {function} React.component 对象
 */
function setRoute({value, root, app}){
  value.model && registerModel(app, value.model);

  const PATH = root ? 
    root + value.path:
    value.path;

  return (
    <Route 
      exact
      key={PATH}
      path={PATH}
      component={value.component}
    />
  );
};

export default ({history, app})=>{
  const routers = routerMap.map((value) => {
    let r = [];

    if(value.hasOwnProperty('next')){
      let len = Number(value.next.length);

      while(len){
        const next = value.next[--len];
        r.push(setRoute({
          value: next,
          root: value.path,
          app: app,
        }));
      };
    }else{
      r.push(setRoute({
        value: value,
        app: app,
      }));
    };

    return r;
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
