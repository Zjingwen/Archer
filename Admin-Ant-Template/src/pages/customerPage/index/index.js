import React from 'react';
import { connect } from 'dva';
import Frome from '@components/Frome';
import Title from '@components/Title';

class IndexPage extends React.Component {
  render() {
    return (
      <Frome>
        <Title title="标签管理" />
      </Frome>
    );
  }
};

export default connect()(IndexPage);