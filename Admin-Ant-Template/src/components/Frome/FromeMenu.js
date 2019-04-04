/**
 * @todo 优化 补充注释
 */
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import routerMap from '@pages';
import {jsonToQuery} from '@utils/assist';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class FromeMenu extends React.Component {
  constructor(props) {
    super(props);
    /**
     * @todo 使用router的方法，不用window方法
     */
    const locationHash = window.location.hash.indexOf('#') > -1 ? window.location.hash.slice(1) : window.location.pathname;
    this.state = {
      key: [locationHash]
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
  }


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
          defaultSelectedKeys={this.state.key}
        >
          {MENU_ITEMS}
        </Menu>
      </Sider>
    );
  };
};

export default FromeMenu;