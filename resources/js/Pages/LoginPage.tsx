import { Inertia } from '@inertiajs/inertia';
import { Breadcrumb, Col, Layout, Row, Form } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import React from 'react';
import route from 'ziggy-js';
import LoginForm from '../forms/LoginForm';

const LoginPage = () => {
  const handleLogin = (values: { email: string; password: string }) => {
    Inertia.post(route('do.login'), {
      email: values.email,
      password: values.password,
    });
  };
  return (
    <div className="main">
          <header className="main">
            <div className="login-container">

              <div className="photo">
                <img src="/img/image-4.png" alt=""/>
              </div>
              <div className="form-cont">
                <div className='inner-form'>
                    <div className='social-login'>
                       <h1>HELLO!!! WELCOME BACK</h1>
                       <p>Login With Your Account</p>
                    </div>
                    <div className='login-form'><LoginForm onFinish={handleLogin} /></div>
                    </div>
          </div>
          </div>
      </header>
    </div>
            
  );
};

export default LoginPage;

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
