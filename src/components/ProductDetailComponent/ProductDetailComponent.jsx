import React from 'react'
import { Row, Col, Image } from 'antd'
import ImageProduct from '../../assets/images/test.webp'
import { WrapperContent, WrapperTextHeaderProduct, WrapperItem, ImageContainer, BadgeBottom, BadgeContainer, BadgeTop, WrapperTextInforFilm } from './styled'
import Subttile from '../../assets/icon/subtitle.svg'
import Play from '../../assets/icon/ic-play-circle-red.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const ProductDetailComponent = () => {
    return (
        <div>
            <Row>
                <Col span={10}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ImageContainer>
                            <Image src={ImageProduct} alt="image product" preview={false} />
                            <BadgeContainer>
                                <BadgeTop>
                                    <span>P</span>
                                </BadgeTop>
                                <BadgeBottom>
                                    <span>K I D</span>
                                </BadgeBottom>
                            </BadgeContainer>
                        </ImageContainer>

                    </div>
                </Col>
                <WrapperContent span={14}>
                    <WrapperTextHeaderProduct>VÙNG ĐẤT CÂM LẶNG: NGÀY MỘT (T16)</WrapperTextHeaderProduct>
                    <WrapperItem>
                        <svg width="30" height="30" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.65102 10.7566C2.62066 9.72627 2.10549 9.21109 1.91379 8.54268C1.72209 7.87428 1.88592 7.16436 2.21357 5.74453L2.40252 4.92575C2.67818 3.73124 2.81601 3.13398 3.22499 2.72499C3.63398 2.31601 4.23123 2.17818 5.42574 1.90252L6.24453 1.71357C7.66436 1.38592 8.37428 1.22209 9.04268 1.41379C9.71109 1.60549 10.2263 2.12066 11.2566 3.15102L12.4764 4.37078C14.269 6.16344 15.1654 7.05976 15.1654 8.17358C15.1654 9.28739 14.269 10.1837 12.4764 11.9764C10.6837 13.769 9.78739 14.6654 8.67358 14.6654C7.55976 14.6654 6.66344 13.769 4.87078 11.9764L3.65102 10.7566Z" stroke="#F3EA28" stroke-width="1.5" />
                            <circle cx="6.23718" cy="5.91797" r="1.33333" transform="rotate(-45 6.23718 5.91797)" stroke="#F3EA28" stroke-width="1.5" />
                            <path d="M8.19548 12.332L12.8481 7.6792" stroke="#F3EA28" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        <span>Kinh Dị</span>
                    </WrapperItem>
                    <WrapperItem>
                        <svg width="30" height="30" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.4987" cy="7.9987" r="6.66667" stroke="#F3EA28" stroke-width="1.5" />
                            <path d="M8.5 5.33203V7.9987L10.1667 9.66536" stroke="#F3EA28" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>100'</span>
                    </WrapperItem>
                    <WrapperItem>
                        <FontAwesomeIcon icon="fa-solid fa-earth-americas" />
                        <span>Khác</span>
                    </WrapperItem>
                    <WrapperItem>
                        <img src={Subttile} alt="subtitle" style={{ height: '35px', width: '35px' }} />
                        <span>VN</span>
                    </WrapperItem>
                    <WrapperItem>
                        <span style={{ backgroundColor: '#FDFFD2', padding: '0 5px', color: '#141E46' }}>T16: Phim dành cho khán giả từ đủ 16 tuổi trở lên (16+)</span>
                    </WrapperItem>
                    <WrapperTextInforFilm>MÔ TẢ</WrapperTextInforFilm>
                    <WrapperItem>Đạo diễn: Michael Sarnoski</WrapperItem>
                    <WrapperItem>Diễn viên: Joseph Quinn, Alex Wolff, Djimon Hounsou</WrapperItem>
                    <WrapperItem>Khởi chiếu: 27/06/2024</WrapperItem>
                    <WrapperTextInforFilm>NỘI DUNG PHIM</WrapperTextInforFilm>
                    <WrapperItem>Chứng kiến ngày mà cả thế giới bỗng im lặng.</WrapperItem>
                    <a href="#">Xem trailer</a>
                </WrapperContent>
            </Row>
        </div>
    )
}

export default ProductDetailComponent