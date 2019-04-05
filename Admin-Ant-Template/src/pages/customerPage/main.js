import HOCpage from '@hoc/HOCpage';

import index from './index';// 标签管理

export default {
  path: '/coustomer',
  component: HOCpage(index),
  breadcrumbName: '充值管理',
  iconType: 'pay-circle',
  query: {
    id: '',
    page: '',
  },
};