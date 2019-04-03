import index from './index';// 已上线
import end from './end';// 活动管理

export default {
  path: '/admin/activity',
  breadcrumbName: '活动管理',
  iconType: 'bulb',
  next:[
    {
      path: '/index',
      component: index,
      breadcrumbName: '已上线',
      iconType: 'bulb',
    },
    {
      path: '/end',
      component: end,
      breadcrumbName: '已结束',
      iconType: 'bulb',
    },
  ],
};