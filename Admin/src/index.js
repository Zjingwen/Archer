import dva from 'dva';
import './index.css';
import browserHistory from 'history/createBrowserHistory';
import moment from 'antd/node_modules/moment';
import 'antd/node_modules/moment/locale/zh-cn';
moment.locale('zh-cn');

// 1. Initialize
const app = dva({
    initialState: {
    },
    history: browserHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model 
// app.model(require('./models/login').default);  

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');