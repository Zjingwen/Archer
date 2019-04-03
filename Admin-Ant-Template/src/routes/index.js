import indexPage from './indexPage';
import loginPage from './loginPage';
import coustomerPage from './customerPage';
import activityPage from './activityPage';

export default [
  {
    path: '/admin',
    component: indexPage,
    breadcrumbName: '主页',
    iconType: 'desktop',
    Menu: false
  },
  {
    path: '/admin/index',
    component: indexPage,
    breadcrumbName: '首页',
    iconType: 'desktop'
  },
  {
    path: '/admin/login',
    component: loginPage,
    breadcrumbName: '登陆',
    iconType: 'video-camera',
    Menu: false
  },
  {
    path: '/admin/coustomer',
    component: coustomerPage,
    breadcrumbName: '充值管理2',
    iconType: 'pay-circle'
  },
  {
    path: '/admin/activity',
    component: activityPage,
    breadcrumbName: '活动管理3',
    iconType: 'bulb'
  },
];
