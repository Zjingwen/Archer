import sign from './sign';// 登陆
import signModel from './sign/model';

export default {
  path: '/admin/user',
  menu: false,
  next:[
    {
      path: '/sign',
      component: sign,
      breadcrumbName: '已上线',
      iconType: 'bulb',
      model: signModel,
    }
  ]
};