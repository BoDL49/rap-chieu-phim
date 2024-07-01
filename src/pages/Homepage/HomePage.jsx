import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { ButtonCustom, WrapperProducts, WrapperTypeProduct } from './styled'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

const HomePage = () => {
    const arr = ['Phim', 'Lịch chiếu', 'Khuyến mãi']
    return (
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
            <div style={{ padding: '0 100px', width: '89.9%' }}>
                <SliderComponent arrImages={[slider1, slider2, slider3]} />

                <WrapperProducts>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </WrapperProducts>


                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <ButtonCustom style={{ width: '240px', height: '38px' }}><span style={{
                        color: 'rgb(187, 37, 37, 1)'
                    }}>Xem thêm</span></ButtonCustom>
                </div>
            </div>
        </div>



    )
}

export default HomePage