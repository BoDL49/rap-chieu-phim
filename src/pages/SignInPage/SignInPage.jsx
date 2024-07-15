import React, { useState } from 'react';
import { LockOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const navigate = useNavigate();

    const navigateTosignup = () => {
        navigate('/signup');
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Mật khẩu"
                        suffix={
                            <div onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                                {showPassword ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                            </div>
                        }
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
