import React from 'react';
import { connect } from 'dva';
import Frome from '@components/Frome';
import Title from '@components/Title';

function IndexPage() {
  return (
    <Frome>
      <Title title='我是主页' />
    </Frome>
  );
}

export default connect()(IndexPage);