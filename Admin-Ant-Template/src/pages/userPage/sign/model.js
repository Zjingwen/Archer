import { routerRedux } from 'dva/router';
import axios from 'axios';
import {message} from 'antd';

export default {
  namespace: 'userSign',
  state:{},
  effects:{
    * fromPost({payload}, {call, put}){
      const result = yield call(()=>axios.get('/api/user/sign', { params: payload }));
      const json = result.data;
      const msg = json.status.msg;

      if (json.status.code === 1001) {
        message.success(msg);
        localStorage.setItem('userInfo', JSON.stringify({
          name: json.result.name,
          sign: json.result.sign,
        }));
        yield put(routerRedux.push('/admin/index'));
      }else{
        message.error(msg);
      };
    }
  }
};
