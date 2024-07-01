import React from 'react'
import { Footer } from './styled'
import { Col } from 'antd'
import { WrapperHeadFooter, WrapperColFooter, WrapperCinema, FooterIcoin } from './styled'

const FooterComponent = () => {
    return (
        <Footer>
            <Col span={5}>
                <WrapperCinema>CINEMA</WrapperCinema>
                <FooterIcoin>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                        <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                    </svg>
                </FooterIcoin>
            </Col>
            <Col span={6}>
                <WrapperHeadFooter>GIỚI THIỆU</WrapperHeadFooter>
                <WrapperColFooter>Tin tức & sự kiện</WrapperColFooter>
                <WrapperColFooter>Khuyến mãi</WrapperColFooter>
                <WrapperColFooter>Tuyển dụng</WrapperColFooter>
            </Col>
            <Col span={7}>
                <WrapperHeadFooter>LIÊN HỆ</WrapperHeadFooter>
                <WrapperColFooter>Hotline: 190000 57</WrapperColFooter>
                <WrapperColFooter>Email: cinema@gmail.com</WrapperColFooter>
                <WrapperColFooter>Địa chỉ: 12 Tô Hiến Thành, Q10, HCM</WrapperColFooter>
            </Col>
            <Col span={6}>
                <WrapperHeadFooter>QUY ĐỊNH & ĐIỀU KHOẢN</WrapperHeadFooter>
                <WrapperColFooter>Chính sách & điều khoản</WrapperColFooter>
                <WrapperColFooter>Hướng dẫn đặt vé trực tuyến</WrapperColFooter>
                <WrapperColFooter>Quy định thành viên</WrapperColFooter>
            </Col>
        </Footer>


    )
}

export default FooterComponent