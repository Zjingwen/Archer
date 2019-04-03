/**
 * @todo bug 会重复渲染两次
 * @todo 优化 抽离FromeMenu、FromeHeader为独立文件
 * @todo 优化 menu有子目录的时候，点击子目录不关闭
 */
import styles from './index.css';
import React from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import { Link } from 'dva/router';
import routerMap from '@pages';
import {jsonToQuery} from '@utils/assist';

const { Header, Sider, Content } = Layout;
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
        return(<SubMenu key={value.path} title={<><Icon type={value.iconType} />{value.breadcrumbName}</>}>
          {this.subMenuChildrens({
            next: value.next,
            path: value.path,
          })}
        </SubMenu>);
      };

      return (<Menu.Item key={value.path}>
        <Link to={value.path}>
          <Icon type={value.iconType} />{value.breadcrumbName}
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

class FromeHeader extends React.Component {

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <span>退出登陆</span>
        </Menu.Item>
      </Menu>
    );

    return (
      <Header className={styles.header}>
        <Icon
          className={styles.trigger}
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.updateStateProp}
        />
        <div style={{ float: "right" }}>
          <Dropdown overlay={menu}>
            <span>静文</span>
          </Dropdown>
        </div>
      </Header>
    );
  }
};

class Frome extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
      <Layout className={styles.layout}>
        <FromeMenu collapsed={this.state.collapsed}></FromeMenu>
        <Layout>
          <FromeHeader collapsed={this.state.collapsed} updateStateProp={this.toggle}></FromeHeader>
          <Content className={styles.content}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  };
};

export default Frome;