import styled from 'styled-components'
import { Button, Row } from 'antd'

export const WrapperHeader = styled(Row)`
    padding: 20px 120px;
    align-items: center;

`

export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-family: 'JejuMyeongjo';
`

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    font-size: 15px;
    font-weight: bold;
    font-family: 'Poppins';
`

export const WrapperHeaderFilm = styled(Button)`
    align-items: center;    
    background-color: #FF6969;
    font-size: 15px;
    color: #fff;
    font-family: 'Josefin Sans';
`
export const WrapperHeaderCart = styled.div`
    display: flex;
    gap: 10px;
`


