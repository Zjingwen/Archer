import React from 'react';
import { connect } from 'dva';
import Frome from '@components/Frome';

function IndexPage() {
  return (
    <Frome>
      活动列表页面
    </Frome>
  );
}

export default connect()(IndexPage);