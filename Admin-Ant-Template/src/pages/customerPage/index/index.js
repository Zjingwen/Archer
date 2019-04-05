import React from 'react';
import { connect } from 'dva';
import Title from '@components/Title';

class IndexPage extends React.Component {
  render() {
    return (
      <Title title="标签管理" />
    );
  }
};

export default connect()(IndexPage);