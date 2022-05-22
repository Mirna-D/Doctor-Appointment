import { Button, Form, Input, Space } from 'antd';
import React from 'react';

interface Props {
  onFinish: (values: any) => any;
}

const LoginForm: React.FC<Props> = ({ onFinish }) => {
  const [loginForm] = Form.useForm();
  return (
    <Form
      form={loginForm}
      name="loginForm"
      initialValues={{ remember: true }}
      layout="vertical"
      onFinish={(values) => onFinish(values)}
    >
      <label htmlFor="email">Email</label>
      <Form.Item
        name="email"
        
        rules={[{ required: true, message: 'Enter your email address' }]}
      >
        
        <Input placeholder="Enter your email address" />
      </Form.Item>
      <label htmlFor='password'>Password</label>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Enter your password' }]}
      >
        <Input.Password className='password' placeholder="Enter your password" />
      </Form.Item>

      <Form.Item>
          <Button className='button' type="primary" htmlType="submit">
            Login
          </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
