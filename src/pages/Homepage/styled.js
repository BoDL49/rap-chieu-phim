import { Button } from 'antd'
import styled from 'styled-components'

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 40px;
    color: white;
`

export const ButtonCustom = styled(Button)`
    background: #141E46;
    border: 1px solid rgba(255, 245, 224, 1);
    borderRadius: '5px';
    width: '240px';
    height: '38px';

    &:hover {
        color: #fff;
        background: rgba(187, 37, 37, 1);
        span{
            color: #fff;
        }
}
`

export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
    flex-wrap: wrap;
`

