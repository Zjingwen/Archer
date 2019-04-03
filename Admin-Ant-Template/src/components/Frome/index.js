/**
 * @todo bug 会重复渲染两次
 * @todo 优化 menu有子目录的时候，点击子目录不关闭
 * @todo 优化 是否可以改造为方法函数
 */
import styles from './index.css';
import React from 'react';
import { Layout } from 'antd';

import FromeMenu from './FromeMenu';
import FromeHeader from './FromeHeader';

const { Content } = Layout;

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
        <FromeMenu collapsed={this.state.collapsed} />
        <Layout>
          <FromeHeader collapsed={this.state.collapsed} updateStateProp={this.toggle} />
          <Content className={styles.content}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  };
};

export default Frome;