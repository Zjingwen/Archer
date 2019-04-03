import React from 'react';
import { connect } from 'dva';
import Frome from '@components/Frome';
// import { authentication } from '@utils/assist';

class IndexPage extends React.Component {
  // componentDidMount(){
  //   authentication(this);
  // };

  render(){
    return (
      <Frome>
        你来到了一个神奇的404
      </Frome>
    );
  };
}

export default connect()(IndexPage);
