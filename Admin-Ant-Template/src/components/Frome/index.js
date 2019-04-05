/**
 * @todo bug 会重复渲染两次
 * @todo 优化 menu有子目录的时候，点击子目录不关闭
 * @todo 优化 是否可以改造为方法函数
 */
import React, {useState} from 'react';
import { Layout } from 'antd';

import FromeMenu from './FromeMenu';
import FromeHeader from './FromeHeader';

const { Content } = Layout;

function FromeFun (props){
  const [collapsed, setCollapsed] = useState(false);
  const STYLE_LAYOUT = {
    height: '100%'
  };
  const STYLE_CONTENT = {
    margin: '24px 16px',
    padding: '50px',
    background: '#fff',
    height: '100%',
    overflowY: 'scroll',
  };

  return (
    <Layout style={STYLE_LAYOUT}>
      <FromeMenu collapsed={collapsed} />
      <Layout>
        <FromeHeader collapsed={collapsed} updateStateProp={()=>setCollapsed(!collapsed)} />
        <Content style={STYLE_CONTENT}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default FromeFun;