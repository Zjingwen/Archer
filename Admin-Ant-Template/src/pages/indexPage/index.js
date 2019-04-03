import React from 'react';
import { connect } from 'dva';
import Frome from '@components/Frome';

function IndexPage() {
  return (
    <Frome>
      我是主页
    </Frome>
  );
}

export default connect()(IndexPage);
