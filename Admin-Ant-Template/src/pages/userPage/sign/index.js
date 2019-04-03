import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { Form, Icon, Input, Button, Row, Col, message } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;


class Logo extends React.Component {
  render() {
    return (
      <p style={{ textAlign: "center" }}>管理台</p>
    );
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      getCodeBtnText: '获取验证码',
      sleep: 15
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const params = { ...values };
        axios.get('/api/admin/user/login', { params: params }).then(res => {
          const json = res.data;
          const msg = json.result.msg;

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

  handleSleep = () => {
    const self = this;
    let sleep = this.state.sleep;

    if (sleep <= 15 && sleep !== 0) {
      setTimeout(() => {
        self.setState({
          disabled: true,
          getCodeBtnText: '请等待' + sleep + 's',
          sleep: --sleep
        });
        self.handleSleep();
      }, 1000);
    }

    if (sleep === 0) {
      self.setState({
        disabled: false,
        getCodeBtnText: '获取验证码',
        sleep: 15
      });
    }

  }

  handleGetCheck = () => {

    const self = this;
    const phone = this.props.form.getFieldValue('phone');
    const params = {
      phone: phone
    };

    axios.get('/api/admin/user/getCheckCode', { params: params }).then(res => {
      const json = res.data;
      const msg = json.result.msg;

      if (json.status.code === 1001) {

        self.setState({
          disabled: true
        });
        message.success(msg);
        self.handleSleep();
      } else {
        message.error(msg);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { disabled, getCodeBtnText } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} className={styles.login_form}>
        <Logo />
        <FormItem>
          <Row style={{ height: 45 }}>
            {getFieldDecorator('phone', {
              rules: [{
                required: true,
                message: '请输入手机号'
              }]
            })(<Input prefix={<Icon type="user" />} size="large" type="number" placeholder="手机号" />)}
          </Row>
        </FormItem>
        <FormItem>
          <Row style={{ height: 45 }}>
            <Col span={16}>
              {getFieldDecorator('code', {
                rules: [{
                  required: true,
                  message: '验证码不能为空!'
                }],
              })(<Input prefix={<Icon type="lock" />} size="large" type="number" placeholder="验证码" />)}
            </Col>
            <Col span={8} style={{ textAlign: 'right' }}>
              <Button size="large" onClick={this.handleGetCheck} disabled={disabled}>{getCodeBtnText}</Button>
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

LoginForm.propTypes = {
};

const WrappedLoginForm = Form.create()(LoginForm);

function IndexPage() {
  return (
    <WrappedLoginForm></WrappedLoginForm>
  );
}

export default connect()(IndexPage);
