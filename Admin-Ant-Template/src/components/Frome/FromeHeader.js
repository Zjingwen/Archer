/**
 * @todo 优化 是否可以改造为方法函数 +
 * @todo 优化 用row和col来代替index.css
 * @todo 优化 menu的item支持多个并且callback多个参数
 */
import styles from './index.css';
import React from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import { conf_liberty } from '@pkg';
import {storageGet, storageRemove} from '@utils/assist';

const { Header } = Layout;
const MenuItem = Menu.Item;
const PKG_CONF_ROOT = conf_liberty.root;

// class FromeHeader extends React.Component {

//   render() {
//     const menu = (
//       <Menu>
//         <Menu.Item>
//           <span>退出登陆</span>
//         </Menu.Item>
//       </Menu>
//     );

//     return (
//       <Header className={styles.header}>
//         <Icon
//           className={styles.trigger}
//           type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
//           onClick={()=>this.props.updateStateProp()}
//         />
//         <div style={{ float: "right" }}>
//           <Dropdown overlay={menu}>
//             <span>静文</span>
//           </Dropdown>
//         </div>
//       </Header>
//     );
//   }
// };

function FromeHeader(props){
  const menu = (
    <Menu onClick={()=>outSign()}>
      <MenuItem>
        <span>退出登陆</span>
      </MenuItem>
    </Menu>
  );
  const TYPE = props.collapsed ?
    'menu-unfold' :
    'menu-fold';

  function outSign(){
    const path = PKG_CONF_ROOT ? 
      PKG_CONF_ROOT + '/user/sign':
      '/user/sign';
    storageRemove('userInfo');
    window.location.href = path;
  };

  let name = null;
  if(localStorage.getItem('userInfo')){
    name = storageGet('userInfo').name;
  }else{
    outSign();
  }

  return (
    <Header className={styles.header}>
      <Icon
        className={styles.trigger}
        type={TYPE}
        onClick={()=>props.updateStateProp()}
      />
      <div style={{ float: "right" }}>
        <Dropdown overlay={menu}>
          <span>{name}</span>
        </Dropdown>
      </div>
    </Header>
  );
}

export default FromeHeader;