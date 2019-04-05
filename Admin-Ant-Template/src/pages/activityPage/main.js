import index from './index';// 已上线
import end from './end';// 活动管理

export default {
  path: '/activity',
  breadcrumbName: '活动管理',
  iconType: 'bulb',
  next:[
    {
      path: '/index',
      component: index,
      breadcrumbName: '已上线',
      iconType: 'bulb',
      query: {
        id: '',
        page: '',
      },
    },
    {
      path: '/end',
      component: end,
      breadcrumbName: '已结束',
      iconType: 'bulb',
      query: {
        id: '',
        page: '',
      },
    },
  ],
};