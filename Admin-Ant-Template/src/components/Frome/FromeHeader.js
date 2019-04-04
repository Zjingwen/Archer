/**
 * @todo 优化 是否可以改造为方法函数
 * @todo 优化，用row和col来代替index.css
 */
import styles from './index.css';
import React from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';

const { Header } = Layout;

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
          onClick={()=>this.props.updateStateProp()}
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

export default FromeHeader;