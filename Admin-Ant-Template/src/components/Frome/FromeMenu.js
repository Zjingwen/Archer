/**
 * @todo 优化 补充注释
 * @todo 优化 改为函数组件
 */
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';

import routerMap from '@pages';
import { jsonToQuery } from '@utils/assist';
import { conf_liberty } from '@pkg';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

/**
 * 判断路径返回对应的key和openKeys
 * @returns {object} obj
 * @param {string} obj.openKeys 上级目录
 * @param {string} obj.key 子目录
 */
function getMenuPath(){
  const ROOT = conf_liberty.root;
  const PATH_NAME_ARRAY = window.location.pathname.split('/');
  let conf = {
    key: '',
    openKeys: '',
  };
  if(ROOT){
    conf.openKeys = `/${PATH_NAME_ARRAY[1]}/${PATH_NAME_ARRAY[2]}`;
    if(PATH_NAME_ARRAY[3]){
      conf.key = `/${PATH_NAME_ARRAY[1]}/${PATH_NAME_ARRAY[2]}/${PATH_NAME_ARRAY[3]}`;
    }else{
      conf.key = `/${PATH_NAME_ARRAY[1]}/${PATH_NAME_ARRAY[2]}`;
    }
    
  }else{
    conf.openKeys = `/${PATH_NAME_ARRAY[1]}`;
    conf.key = `/${PATH_NAME_ARRAY[1]}/${PATH_NAME_ARRAY[2]}`;
  }
  return conf;
};

class FromeMenu extends React.Component {
  constructor(props) {
    super(props);
    const conf = getMenuPath(); 
    this.state = {
      key: [conf.key],
      openKeys: [conf.openKeys],
    };
  }

  subMenuChildrens({next, path}){
    return next.map((value)=>{
      const QUERY = value.hasOwnProperty('query') ? jsonToQuery(value.query) : '';
      const PATH = path + value.path;

      return (<Menu.Item key={PATH}>
        <Link to={{
          pathname: PATH,
          search: `?${QUERY}`
        }}>
          <Icon type={value.iconType} />{value.breadcrumbName}
        </Link>
      </Menu.Item>);
    });
  };

  render() {
    const ROUTER_SELECT = routerMap.filter((v) => {
      if(v.hasOwnProperty('menu')) return v.menu ? true : false;
      return true;
    });

    const MENU_ITEMS = ROUTER_SELECT.map((value) => {
      if(value.hasOwnProperty('next')){
        return(<SubMenu key={value.path} title={<><Icon type={value.iconType} /><span>{value.breadcrumbName}</span></>}>
          {this.subMenuChildrens({
            next: value.next,
            path: value.path,
          })}
        </SubMenu>);
      };

      return (<Menu.Item key={value.path}>
        <Link to={value.path}>
          <Icon type={value.iconType} /><span>{value.breadcrumbName}</span>
        </Link>
      </Menu.Item>);
    });

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultOpenKeys={this.state.openKeys} // 上级目录
          defaultSelectedKeys={this.state.key} // 子级目录
        >
          {MENU_ITEMS}
        </Menu>
      </Sider>
    );
  };
};

export default FromeMenu;