import 'antd/node_modules/moment/locale/zh-cn';
import './index.css';

import dva from 'dva';
import browserHistory from 'history/createBrowserHistory';
import moment from 'antd/node_modules/moment';
import {message} from 'antd';

moment.locale('zh-cn');

// 1. Initialize
const app = dva({
  initialState: {
  },
  history: browserHistory(),
  onError(e){
    message.error(e);
  },
});

// 2. Plugins
// app.use({});

// 3. Model 
// app.model(require('./models/login').default);  

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');