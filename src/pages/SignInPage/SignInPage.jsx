import React, { useEffect, useRef, useState, useCallback } from 'react';
import { LockOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import * as UserService from '../../services/UserService';
import { useMutationHook } from '../../hooks/useMutationHook';
import Loading from '../../components/LoadingComponent/Loading';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux'
import { updateUser, updateKhachHang } from '../../redux/slides/userSlide';

const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navigateTosignup = () => {
        navigate('/signup');
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        if (inputRef.current) {
            const inputLength = inputRef.current.input.value.length;
            inputRef.current.input.setSelectionRange(inputLength, inputLength);
        }
    };

    const mutation = useMutationHook(data => UserService.loginUser(data));
    const { data, isLoading, isSuccess } = mutation;

    useEffect(() => {
        if (isSuccess) {
            navigate('/');
            localStorage.setItem('access_token', JSON.stringify(data?.access_token));
            if (data?.access_token) {
                const decoded = jwtDecode(data?.access_token);
                if (decoded?.id) {
                    handleGetDetailUser(decoded?.id, data?.access_token);
                }
            }
        }
    }, [isSuccess]);

    const handleGetDetailUser = async (id, token) => {
        const res = await UserService.getDetailUser(id, token);
        const resKh = await UserService.getDetailKhachHang(res?.data.Matk);
        dispatch(updateUser({ ...res.data, access_token: token }));
        dispatch(updateKhachHang(resKh?.data));
    };

    const handleSubmit = useCallback((values) => {
        mutation.mutate(values);
    }, [mutation]);

    const onFinish = (values) => {
        if (!isLoading) {
            handleSubmit(values);
        }
    };

    return (
        <div className="signin-container">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                style={{ width: '600px' }}
            >
                <h2 className="form-title">ĐĂNG NHẬP</h2>
                <Form.Item
                    name="Email"
                    rules={[{ required: true, message: 'Vui lòng điền email' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="Matkhau"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}
                >
                    <Input.Password
                        ref={inputRef}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Mật khẩu"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        onIconClick={togglePasswordVisibility}
                    />
                </Form.Item>
                <Loading isLoading={isLoading}>
                    <Form.Item>
                        {data?.status === 'ERR' && <div style={{ color: 'red' }}>{data?.message}</div>}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            ĐĂNG NHẬP
                        </Button>
                        <Link to="/">Quên mật khẩu</Link>
                    </Form.Item>
                </Loading>
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
