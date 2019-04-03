import indexPage from './indexPage/index';
import userPage from './userPage/sign';
import coustomerPage from './customerPage/index';
import activityPage from './activityPage/index';

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
    path: '/admin/sign',
    component: userPage,
    breadcrumbName: '登陆',
    iconType: 'video-camera',
    Menu: false
  },
  {
    path: '/admin/coustomer',
    component: coustomerPage,
    breadcrumbName: '充值管理',
    iconType: 'pay-circle'
  },
  {
    path: '/admin/activity',
    component: activityPage,
    breadcrumbName: '活动管理',
    iconType: 'bulb'
  },
];
