import React from "react"
import { Button, Card } from 'antd';
import { StyledNameProduct } from './styled'




const CardComponent = () => {
    return (
        <Card
            hoverable
            style={{ width: '330px', height: '560px', borderRadius: '0px', background: 'linear-gradient(180deg, #141E46 9.13%, #CC5E64 23.98%, #141E46 33.61%)' }}
            bodyStyle={{ padding: '5px', background: 'linear-gradient(180deg, #141E46 9.13%, #CC5E64 23.98%, #141E46 33.61%)' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <div style={{
                width: '50px',
                height: '50px',
                position: 'absolute',
                textAlign: 'center',
                top: '-1px',
                left: '-1px',
            }}>
                <div style={{
                    background: 'rgba(187, 37, 37, 1)',
                }}>
                    <span style={{
                        color: '#fff', fontSize: '20px', fontWeight: '700'
                    }}>P</span>
                </div>
                <div style={{ background: 'rgba(255, 105, 105, 1)', }}>
                    <span style={{ color: 'rgba(20, 30, 70, 1);' }}>K I D</span>
                </div>
            </div>
            <StyledNameProduct>NHỮNG MẢNH GHÉP CẢM XÚC 2</StyledNameProduct>
            <div style={{
                display: 'flex',
                paddingTop: '5px',
                gap: '15px',
                justifyContent: 'center',
            }}>
                <span style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    color: 'rgba(255, 255, 255, 1)',
                }}>Xem trailer</span>
                <Button style={{
                    background: 'rgba(187, 37, 37, 1)',
                    color: 'rgba(252, 255, 100, 1)',
                    fontSize: '24px',
                    width: '100px',
                }}>Đặt vé</Button>
            </div>
        </Card >
    )
}

export default CardComponent