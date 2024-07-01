import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';



const SignInPage = () => {
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
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Quên mật khẩu
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Đăng nhập
                </Button>
                <span style={{ padding: '5px' }}>hoặc</span>
                <a href="/signup">Đăng ký!</a>
            </Form.Item>
        </Form >
    );
}

export default SignInPage