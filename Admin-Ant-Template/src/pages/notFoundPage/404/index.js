import React from 'react';
import { connect } from 'dva';
import Frome from '@components/Frome';

class IndexPage extends React.Component {
  render(){
    return (
      <Frome>
        你来到了一个神奇的404
      </Frome>
    );
  };
}

export default connect()(IndexPage);
