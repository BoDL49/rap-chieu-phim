import React from 'react'
import { Col } from 'antd'
import { WrapperHeader } from './styled'
import { WrapperTextHeader, WrapperHeaderAccount, WrapperHeaderFilm, WrapperHeaderCart } from './styled'
import { Input } from 'antd';
import {
    UserOutlined
} from '@ant-design/icons';


const { Search } = Input;



const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader>
                <Col span={6}>
                    <WrapperTextHeader>CINEMA</WrapperTextHeader>
                </Col>
                <Col span={6}>
                    <WrapperHeaderCart >
                        <WrapperHeaderFilm>
                            <span>Đặt vé ngay</span>
                        </WrapperHeaderFilm>
                        <WrapperHeaderFilm>Đặt bắp nước</WrapperHeaderFilm>
                    </WrapperHeaderCart>
                </Col>
                <Col span={6}>
                    <Search
                        placeholder="Tìm phim..."
                        allowClear
                        style={{
                            width: 200,
                        }}
                    />
                </Col>
                <Col span={6}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <span>Đăng nhập</span>
                        </div>
                    </WrapperHeaderAccount>

                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent