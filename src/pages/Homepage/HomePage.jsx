import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './styled'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'

const HomePage = () => {
    const arr = ['Phim', 'Lịch chiếu', 'Khuyến mãi']
    return (
        <div style={{ padding: '0 120px' }}>
            <WrapperTypeProduct>
                {arr.map((item) => {
                    return (
                        <TypeProduct name={item} key={item} />
                    )
                })}
            </WrapperTypeProduct>

            <SliderComponent arrImages={[slider1, slider2, slider3]} />

            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <CardComponent />
            </div>
        </div>
    )
}

export default HomePage