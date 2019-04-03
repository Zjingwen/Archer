import styles from './index.css';
import React from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import { Link } from 'dva/router';
import routerMap from '@pages';
const { Header, Sider, Content } = Layout;


class FromeMenu extends React.Component {
  constructor(props) {
    const locationHash = window.location.hash.indexOf('#') > -1 ? window.location.hash.slice(1) : window.location.pathname;
    super(props);
    this.state = {
      key: [locationHash]
    };
  }

  render() {
    const MenuItems = [];

    routerMap.forEach((value, index) => {
      if (value.hasOwnProperty('Menu')) return;
      MenuItems.push(<Menu.Item key={value.path}>
        <Link to={value.path}>
          <Icon type={value.iconType} />
          <span>{value.breadcrumbName}</span>
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
          {/* <Menu.Item key={1}>
                    <Link to={'/admin/login'}>
                        login
                    </Link>
                </Menu.Item> */}
          {MenuItems}
        </Menu>
      </Sider>
    );
  };
}

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
    )
  }
}

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
}

export default Frome;