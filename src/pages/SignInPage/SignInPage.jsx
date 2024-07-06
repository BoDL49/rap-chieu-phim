import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './style.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');;
    };

    const navigateTosignup = () => {
        navigate('/signup');
    }

    return (


        <div className="signin-container">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                style={{ width: '600px' }}
            >
                <h2 className="form-title">ĐĂNG NHẬP</h2>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng điền email!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email ..." />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng điền mật khẩu!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Mật khẩu ..."
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        ĐĂNG NHẬP
                    </Button>
                    <Link to="/">Quên mật khẩu</Link>
                </Form.Item>
                <div className="form-footer">
                    <span className="divider"></span>
                    <span>HOẶC</span>
                    <span className="divider"></span>
                </div>
                <Form.Item>
                    <Button type="primary" htmlType="button" className="signup-form-button" onClick={navigateTosignup}>
                        ĐĂNG KÝ
                    </Button>
                </Form.Item>
                <div style={{ marginTop: '20px' }}>
                    <Link to="/">Quay lại trang chủ</Link>
                </div>
            </Form>
        </div>
    );
};

export default SignInPage;
