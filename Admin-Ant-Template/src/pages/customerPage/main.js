import index from './index/index';// 标签管理

export default {
  path: '/coustomer',
  component: index,
  breadcrumbName: '充值管理',
  iconType: 'pay-circle',
  query: {
    id: '',
    page: '',
  },
};