import React from 'react'
import { Col } from 'antd'
import { WrapperHeader } from './styled'
import { WrapperTextHeader, WrapperHeaderAccount, WrapperHeaderFilm, WrapperHeaderCart, WrapperTypeProduct } from './styled'
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import TypeProduct from '../../components/TypeProduct/TypeProduct'

import {
    UserOutlined
} from '@ant-design/icons';


const { Search } = Input;



const HeaderComponent = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');;
    };

    const navigateToSignIn = () => {
        navigate('/signIn');
    }
    const arr = ['Phim', 'Lịch chiếu', 'Khuyến mãi']
    return (

        <>
            <div>
                <WrapperHeader>
                    <Col span={6}>
                        <WrapperTextHeader onClick={navigateToHome}>CINEMA</WrapperTextHeader>
                    </Col>
                    <Col span={6}>
                        <WrapperHeaderCart >
                            <WrapperHeaderFilm>
                                <svg style={{ transform: 'rotate(80deg)' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-ticket-fill" viewBox="0 0 16 16">
                                    <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3z" />
                                </svg>
                                <span style={{ fontFamily: 'Poppins, sans-serif' }}>Đặt vé ngay</span>
                            </WrapperHeaderFilm>
                            <WrapperHeaderFilm>
                                <svg style={{ transform: 'rotate(350deg)' }} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 160" x="0px" y="0px" width="20" height="20"><path d="M55.16,22c.53,0,.91,0,1,0a2,2,0,0,0-.39-4c-.84.08-3.55,0-4.91-1.25A3.27,3.27,0,0,1,50,14.07a2,2,0,0,0-4-.15,7.16,7.16,0,0,0,2.15,5.72C50.34,21.71,53.52,22,55.16,22Z" /><path d="M53.34,29.21A2,2,0,0,0,53.88,32a10.35,10.35,0,0,0,5.73,2,7.07,7.07,0,0,0,2.1-.32,8.81,8.81,0,0,0,5.15-5,2,2,0,0,0-3.71-1.49,5,5,0,0,1-2.64,2.62c-1.19.36-2.67,0-4.39-1.2A2,2,0,0,0,53.34,29.21Z" /><path d="M79,24h0a2,2,0,0,0,0-4,4.85,4.85,0,0,1-3.34-1.42c-.71-.89-.86-2.29-.44-4.14a2,2,0,0,0-3.9-.87c-.69,3.11-.27,5.65,1.24,7.53A8.71,8.71,0,0,0,79,24Z" /><path d="M71.83,38.31a2,2,0,0,0,2.79-.44c.4-.54,1.74-1.91,3.1-1.88s2.74,1.69,3.58,3.05a2,2,0,0,0,3.4-2.11c-2-3.19-4.29-4.86-6.86-4.94-3.77-.13-6.19,3.16-6.46,3.53A2,2,0,0,0,71.83,38.31Z" /><path d="M38.83,41.31a2,2,0,0,0,2.79-.44c.4-.54,1.75-1.92,3.1-1.88s2.74,1.69,3.58,3.05a2,2,0,0,0,3.4-2.11c-2-3.19-4.29-4.86-6.86-4.94h-.21c-3.61,0-6,3.17-6.25,3.53A2,2,0,0,0,38.83,41.31Z" /><path d="M23.54,47.56l14.22,75.58A5.59,5.59,0,0,0,43.19,128h43a5.59,5.59,0,0,0,5.44-4.86l12.69-74.47a9.41,9.41,0,0,0-.41-16.49,9.34,9.34,0,0,0,.92-4,9.49,9.49,0,0,0-8.36-9.38,9,9,0,0,0,.18-1.82A9.18,9.18,0,0,0,85.08,8.15,9.72,9.72,0,0,0,68.62,3.78,8.86,8.86,0,0,0,60.31,4a11.3,11.3,0,0,0-19,2.8c-.25,0-.5,0-.75,0a9.11,9.11,0,0,0-9,10.92,9.49,9.49,0,0,0-8.36,9.38,9.34,9.34,0,0,0,.92,4,9.41,9.41,0,0,0-.55,16.41ZM39,60a2,2,0,1,1,2,2A2,2,0,0,1,39,60Zm2.8,6A2,2,0,0,1,44,67.8l4,40A2,2,0,0,1,46.2,110H46a2,2,0,0,1-2-1.8l-4-40A2,2,0,0,1,41.8,66Zm45.86,56.7A1.6,1.6,0,0,1,86.2,124h-43a1.61,1.61,0,0,1-1.46-1.3c0-.1-.87-4.7-.87-4.7h47.6S87.67,122.63,87.66,122.71ZM58,114V49.4l12,.17V114Zm22-6.2,4-40a2,2,0,1,1,4,.4l-4,40a2,2,0,0,1-2,1.8h-.2A2,2,0,0,1,80,107.8ZM87,62a2,2,0,1,1,2-2A2,2,0,0,1,87,62ZM26.72,34.38a2,2,0,0,0,.35.23A12.75,12.75,0,0,0,32.56,36a8.08,8.08,0,0,0,2.9-.51,7.64,7.64,0,0,0,4.42-4.81,2,2,0,1,0-3.76-1.37A3.77,3.77,0,0,1,34,31.75c-1.79.69-4.29-.25-5.1-.68L28.8,31a1.88,1.88,0,0,0-.15-.21,5.39,5.39,0,0,1-1.48-3.7,5.49,5.49,0,0,1,5.52-5.45,5.57,5.57,0,0,1,1.4.19,2,2,0,0,0,2.14-3.07,5,5,0,0,1-.89-2.86,5.15,5.15,0,0,1,5.17-5.11A5.23,5.23,0,0,1,42,11a2,2,0,0,0,2.53-1.46A7.28,7.28,0,0,1,58.09,7.86a2,2,0,0,0,3.22.44A4.67,4.67,0,0,1,67.76,8a2,2,0,0,0,3-.47A5.7,5.7,0,0,1,81.35,10.4a5.29,5.29,0,0,1,0,.56,2,2,0,0,0,3.15,1.84,5.18,5.18,0,0,1,8.19,4.14,5,5,0,0,1-.89,2.86,2,2,0,0,0,2.14,3.07,5.57,5.57,0,0,1,1.4-.18,5.49,5.49,0,0,1,5.52,5.45,5.35,5.35,0,0,1-.95,3c-.9.43-3.21,1.24-4.9.59a3.76,3.76,0,0,1-2.1-2.44,2,2,0,1,0-3.76,1.38,7.64,7.64,0,0,0,4.42,4.81,8.08,8.08,0,0,0,2.9.51,12.05,12.05,0,0,0,4.11-.79A5.44,5.44,0,0,1,99.49,46l-71-1A5.49,5.49,0,0,1,23,39.52,5.44,5.44,0,0,1,26.72,34.38Z" /></svg>
                                <span style={{ fontFamily: 'Poppins, sans-serif' }}>Đặt bắp nước</span>
                            </WrapperHeaderFilm>
                        </WrapperHeaderCart>
                    </Col>
                    <Col span={6}>
                        <Search
                            placeholder="Tìm phim..."
                            allowClear
                            style={{
                                width: 200,
                                fontFamily: 'Poppins, sans-serif',
                            }}
                        />
                    </Col>
                    <Col span={6}>
                        <WrapperHeaderAccount>
                            <UserOutlined style={{ fontSize: '30px' }} />
                            <div style={{ fontFamily: 'Poppins, sans-serif' }}>
                                <span onClick={navigateToSignIn}>Đăng nhập</span>
                            </div>
                        </WrapperHeaderAccount>

                    </Col>
                </WrapperHeader>
            </div >
            <div>
                <div style={{ padding: '0 120px' }}>
                    <WrapperTypeProduct>
                        {arr.map((item) => {
                            return (
                                <TypeProduct name={item} key={item} />
                            )
                        })}
                    </WrapperTypeProduct>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent