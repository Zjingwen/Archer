import React from 'react';
import { connect } from 'dva';
import Title from '@components/Title';
import Frome from '@components/Frome';

function IndexPage() {
  return (
    <Frome>
      <Title title='活动列表页面'/>
    </Frome>
  );
}

export default connect()(IndexPage);