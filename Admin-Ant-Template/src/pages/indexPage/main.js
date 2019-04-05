/**
 * @todo 优化 rotuer中的path选项支持String或者Array，可以支持多个路由跳转一个页面
 */
import index from './index/index';// 首页

export default {
  path: '/index',
  component: index,
  breadcrumbName: '主页',
  iconType: 'desktop',
  menu: false
};