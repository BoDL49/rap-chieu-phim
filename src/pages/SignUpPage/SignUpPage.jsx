import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import * as message from '../../components/MessageComponent/MessageComponent';
import * as UserService from '../../services/UserService';
import { useMutationHook } from '../../hooks/useMutationHook';
import Loading from '../../components/LoadingComponent/Loading';

const SignInPage = () => {


    const navigate = useNavigate();

    const navigateTosignin = () => {
        navigate('/signin');
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const mutation = useMutationHook(data => UserService.signupUser(data));

    const { data, isLoading, isError, isSuccess } = mutation

    useEffect(() => {
        if (isSuccess) {
            message.susscess();
            navigateTosignin();
        }
        else if (isError) {
            message.error();
        }
    }, [isSuccess, isError])

    const onFinish = (values) => {
        if (!isLoading) {
            mutation.mutate(values);
            console.log('Received values of form: ', values);
        }
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
                <h2 className="form-title">ĐĂNG KÝ</h2>
                <Form.Item
                    name="Tentk"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng điền username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="username ..." />
                </Form.Item>
                <Form.Item
                    name="Email"
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
                    name="Matkhau"
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
                    />
                </Form.Item>
                <Form.Item
                    name="Xacnhanmatkhau"
                    dependencies={['Matkhau']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng điền xác nhận lại mật khẩu!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('Matkhau') === value) {
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
                    />
                </Form.Item>
                <Loading isLoading={isLoading}>
                    <Form.Item>
                        {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            ĐĂNG KÝ
                        </Button>
                    </Form.Item>
                </Loading>
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
