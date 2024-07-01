import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const SignUnPage = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            style={{ width: '500px', margin: 'auto', marginTop: '100px', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng điền username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
                    placeholder="Mật khẩu"
                />
            </Form.Item>
            <Form.Item
                name="repassword"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng điền xác nhận mật khẩu!',
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
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Xác nhận lại mật khẩu"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Đăng ký
                </Button>
                <span style={{ padding: '5px' }}>hoặc</span>
                <a href="/signin">Đăng nhập!</a>
                <br />
                <a className="login-form-forgot" href="">
                    Quên mật khẩu
                </a>
            </Form.Item>
        </Form >
    )
}

export default SignUnPage