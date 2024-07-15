import React, { useState } from 'react';
import { LockOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const [form] = Form.useForm();

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const navigateTosignin = () => {
        navigate('/signin');
    }

    const [Email, setEmail] = useState('');
    const [Tentk, setTentk] = useState('');
    const [Matkhau, setMatkhau] = useState('');
    const [Xacnhanmatkhau, setXacnhanmatkhau] = useState('');

    const handleOnchangeEmail = (value) => {
        setEmail(value);
    }

    const handleOnchangeTentk = (value) => {
        setTentk(value);
    }

    const handleOnchangeMatkhau = (value) => {
        setMatkhau(value);
    }

    const handleOnchangeXacnhanmatkhau = (value) => {
        setXacnhanmatkhau(value);
    }

    const handleSignUp = () => {
        console.log('signup', Tentk, Email, Matkhau, Xacnhanmatkhau);
    }

    return (


        <div className="signin-container">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                // onFinish={onFinish}
                onSubmitCapture={handleSignUp}
                style={{ width: '600px' }}
            >
                <h2 className="form-title">ĐĂNG KÝ</h2>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng điền username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" value={Tentk} onChange={handleOnchangeTentk} />} placeholder="username ..." />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng điền email!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" value={Email} onChange={handleOnchangeEmail} />} placeholder="Email ..." />
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
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Mật khẩu ..."
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        visibilityToggle={true}
                        onClick={() => setShowPassword(!showPassword)}
                        value={Matkhau} onChange={handleOnchangeMatkhau}
                    />
                </Form.Item>
                <Form.Item
                    name="repassword"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng điền xác nhận lại mật khẩu!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Hai mật khẩu bạn đã nhập không khớp!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Xác nhận lại mật khẩu ..."
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        visibilityToggle={true}
                        onClick={() => setShowRePassword(!showRePassword)}
                        value={Xacnhanmatkhau} onChange={handleOnchangeXacnhanmatkhau}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleSignUp}>
                        ĐĂNG KÝ
                    </Button>
                </Form.Item>
                <div className="form-footer">
                    <span className="divider"></span>
                    <span>HOẶC</span>
                    <span className="divider"></span>
                </div>
                <Form.Item>
                    <Button type="primary" htmlType="button" className="signup-form-button" onClick={navigateTosignin}>
                        ĐĂNG NHẬP
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
