import { Col } from 'antd';
import styled from 'styled-components';

export const WrapperTextHeaderProduct = styled.span`
    font-family: 'Poppins', sans-serif;
    font-size: 45px;
    color: #ffff;
    font-weight: bold;
`;

export const WrapperTextInforFilm = styled.span`
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    color: #ffff;
    font-weight: bold;
`;

export const WrapperContent = styled(Col)`
    color: #fff;
`;

export const WrapperItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    gap: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    padding: 5px;
    vertical-align: middle;
    & i {
        color: yellow;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
`;

export const BadgeContainer = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    text-align: center;
    top: 0;
    left: 0;
`;

export const BadgeTop = styled.div`
    background: rgba(187, 37, 37, 1);
    span {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
    }
`;

export const BadgeBottom = styled.div`
    background: rgba(255, 105, 105, 1);
    span {
        color: rgba(20, 30, 70, 1);
    }
`;

export const Infor = styled.div`
    padding-top: 20px;
`;
