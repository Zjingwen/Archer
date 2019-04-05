import {Component} from 'react';
import { connect } from 'dva';
import Title from '@components/Title';

class IndexPage extends Component {
  render(){
    return (
      <Title title='我是主页' />
    );
  }
}

export default connect()(IndexPage);
