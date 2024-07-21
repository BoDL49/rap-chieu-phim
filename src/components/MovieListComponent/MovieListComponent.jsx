import React from 'react'
import PropTypes from 'prop-types'
import ImgTemp from '../../assets/images/TempImg.png'
import { Button } from 'antd'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 7
    },
    tablet: {
        breakpoint: { max: 1200, min: 600 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2
    }
};

const MovieListComponent = ({ tittle }) => {
    return (
        <div className="text-white p-10 mb-10 relative">
            <h2 className="uppercase text-3xl font-bold text-center">{tittle}</h2>
            {/* <Carousel className="flex items-center space-x-5 py-10 mb-20 ">

            </Carousel> */}

            <div className="flex items-center space-x-5 py-10 mb-20 ">
                <div className="w-[350px] h-[450px] relative">
                    <div className="group">
                        <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">
                            <div style={{
                                width: '50px',
                                height: '50px',
                                position: 'absolute',
                                textAlign: 'center',

                            }} >
                                <div style={{
                                    background: 'rgba(187, 37, 37, 1)',
                                }} className="rounded-tl-md">
                                    <span style={{
                                        color: '#fff', fontSize: '20px', fontWeight: '700'
                                    }}>P</span>
                                </div>
                                <div style={{
                                    background: 'rgba(255, 105, 105, 1)',

                                }}>
                                    <span style={{
                                        color: 'rgba(20, 30, 70, 1)'
                                    }}>K I D</span>
                                </div>
                            </div>
                            <div>
                                <img src={ImgTemp} alt="temp" className="w-full object-cover rounded-md" />
                                <p className='uppercase text-xl text-center py-5'>Dự án mật: Thảm hoạ trên cầu</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-5">
                        <span style={{
                            fontSize: '15px',
                            fontWeight: '700',
                            width: '100px',
                            color: 'rgba(255, 255, 255, 1)',
                            alignItems: 'center',
                            display: 'flex',

                        }}>Xem trailer</span>
                        <Button style={{
                            background: 'rgba(187, 37, 37, 1)',
                            color: 'rgba(252, 255, 100, 1)',
                            fontSize: '24px',
                            width: '150px',
                        }}>Đặt vé</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

MovieListComponent.propTypes = {
    tittle: PropTypes.string
}

export default MovieListComponent