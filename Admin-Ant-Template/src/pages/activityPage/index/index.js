import {Component} from 'react';
import { connect } from 'dva';
import HOCpage from '@hoc/HOCpage';

import Title from '@components/Title';
@HOCpage
class IndexPage extends Component{
  render(){
    return (
      <Title title='活动列表页面'/>
    );
  }
}

export default connect()(IndexPage);
