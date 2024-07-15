import styled from 'styled-components'
import { Button, Row } from 'antd'

export const WrapperHeader = styled(Row)`
    padding: 20px 120px;
    align-items: center;
    border-bottom: 1px solid #fff;
`

export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-family: 'JejuMyeongjo', sans-serif;
`

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    font-size: 15px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    vertical-align: middle;
`

export const WrapperHeaderFilm = styled(Button)`
    width: 150px;
    align-items: center;    
    background-color: #FF6969;
    font-size: 15px;
    color: #fff;
    font-family: 'Josefin Sans', sans-serif;
    & svg{
        width: 25px;
        height: 25px;
        fill: rgba(255, 245, 224, 1);
    }
`
export const WrapperHeaderCart = styled.div`
    display: flex;
    gap: 10px;
`
export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 40px;
    color: white;
`

