import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { Form, Icon, Input, Button, Row, Col, message } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const params = { ...values };
        axios.get('/api/user/sign', { params: params }).then(res => {
          const json = res.data;
          const msg = json.status.msg;

          if (json.status.code === 1001) {
            message.success(msg);
          } else {
            message.error(msg);
          }
        });
        return;
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className={styles.login_form}>
        <p style={{ textAlign: "center" }}>管理台</p>
        <FormItem>
          <Row style={{ height: 45 }}>
            <Col>
              {getFieldDecorator('userName', {
                rules: [{
                  required: true,
                  message: '请输入账号'
                }]
              })(<Input prefix={<Icon type="user" />} size="large" type="text" placeholder="账号" />)}
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row style={{ height: 45 }}>
            <Col>
              {getFieldDecorator('passWord', {
                rules: [{
                  required: true,
                  message: '请输入密码'
                }]
              })(<Input prefix={<Icon type="lock" />} size="large" type="password" placeholder="密码" />)}
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Button size="large" type="primary" htmlType="submit" className={styles.login_form_button}>登录</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedLogin = Form.create()(Login);

function IndexPage() {
  return (
    <WrappedLogin />
  );
}

export default connect()(IndexPage);
