import { Row } from "antd";
import styled from "styled-components";

export const Footer = styled(Row)`
    font-family: 'Poppins';
    display: flex;
    background: rgba(187, 37, 37, 0.78);
    padding: 50px 120px;
    margin-top: 50px;
`
export const WrapperHeadFooter = styled.span`
    font-family: 'Poppins';
    font-size: 32px;
    text-align: left;
    color: rgba(255, 255, 255, 1);
    border-bottom: 2px solid rgba(20, 30, 70, 1);
    padding: 5px 0px;
    font-weight: 600;
    line-height: 48px;
`

export const WrapperColFooter = styled.span`
    display: block;
    font-family: 'Poppins';
    font-size: 20px;
    text-align: left;
    color: rgba(255, 255, 255, 1);
    padding: 15px 0px;
`

export const WrapperCinema = styled.span`
    font-family: 'Poppins';
    font-size: 64px;
    font-weight: 600;
    line-height: 96px;
    text-align: left;
    color: rgba(255, 245, 224, 1);
`

export const FooterIcoin = styled.div`
    display: flex;
    width: 220px;
    height: 220px;
    gap: 10px;
    margin-top: 20px;
    padding-left: 10px;
    & svg{
        fill: rgba(255, 245, 224, 1);
    }
`




