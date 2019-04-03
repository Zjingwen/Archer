import sign from './sign';// 登陆

export default {
  path: '/admin/user',
  menu: false,
  next:[
    {
      path: '/sign',
      component: sign,
      breadcrumbName: '已上线',
      iconType: 'bulb',
    }
  ]
};