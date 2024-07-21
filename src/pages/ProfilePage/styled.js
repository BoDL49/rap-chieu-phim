import { Upload } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled.h1`
    color: #fff;
    font-size: 20px;
    margin: 4px 0;
`

export const WrapperContentProfile = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    width: 600px;
    margin: 0 auto;
    padding: 30px;
    border-radius: 10px;
    gap: 30px;
`

export const WrapperLabel = styled.label`
    color: #fff;
    font-size: 12px;
    line-height: 30px;
    fon-weight: 600;
    width: 150px;
    margin-right: -80px;
`;

export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-around;  // Center the input and button
  width: 100%; 
  margin-bottom: 10px;
`;

export const WrapperUploadFile = styled(Upload)`
  & .ant-upload-list-item.ant-upload-list-item-error {
    display: none !important;
  }
`