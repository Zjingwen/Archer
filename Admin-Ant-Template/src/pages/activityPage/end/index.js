import React from 'react';
import { connect } from 'dva';
import Title from '@components/Title';

class IndexPage extends React.Component {
  render() {
    return (
      <Title title="活动结束" />
    );
  }
};

export default connect()(IndexPage);