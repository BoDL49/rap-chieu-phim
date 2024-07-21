import React, { useEffect, useState } from 'react';
import { WrapperContentProfile, WrapperHeader, WrapperInput, WrapperLabel, WrapperUploadFile } from './styled';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import * as UserService from '../../services/UserService';
import { useMutationHook } from '../../hooks/useMutationHook';
import Loading from '../../components/LoadingComponent/Loading';
import * as message from '../../components/MessageComponent/MessageComponent';
import { updateUser, updateKhachHang } from '../../redux/slides/userSlide';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { getBase64 } from '../../ultils';

export const ProfilePage = () => {
    const user = useSelector((state) => state.user);
    const [email, setEmail] = useState('');
    const [TenKH, setTenKH] = useState('');
    const [name, setName] = useState('');
    const [Ngaysinh, setNgaysinh] = useState('');
    const [SoDT, setSoDT] = useState('');
    const [Gioitinh, setGioitinh] = useState('');
    const [Avatar, setAvatar] = useState('');

    const dispatch = useDispatch();
    const userMutation = useMutationHook((data) => { const { id, access_token, ...rests } = data; UserService.updateUser(id, rests, access_token) });
    const khachHangMutation = useMutationHook((data) => {
        const { id, access_token, ...rests } = data;
        UserService.updateKhachHang(id, rests, access_token)
    });

    const { datatk, isLoading: isLoadingUser, isSuccess: isSuccessUser, isError: isErrorUser } = userMutation;
    const { datakh, isLoading: isLoadingKhachHang, isSuccess: isSuccessKhachHang, isError: isErrorKhachHang } = khachHangMutation;

    useEffect(() => {
        if (user) {
            setEmail(user?.Email || '');
            setTenKH(user?.TenKH || '');
            setName(user?.name || '');
            setNgaysinh(user?.Ngaysinh ? moment(user?.Ngaysinh).format('DD/MM/YYYY') : '');
            setSoDT(user?.SoDT || '');
            setGioitinh(user?.Gioitinh || '');
            setAvatar(user?.Avatar || '');
        }
    }, [user]);

    useEffect(() => {
        if (isSuccessUser || isSuccessKhachHang) {
            message.susscess();
            handleGetDetailUser(user?.idtk, user?.access_token);
        }
        else if (isErrorUser || isErrorKhachHang) {
            message.error();
        }
    }, [isSuccessKhachHang, isSuccessUser, isErrorKhachHang, isErrorUser]);

    const handleGetDetailUser = async (id, token) => {
        const res = await UserService.getDetailUser(id, token);
        const resKh = await UserService.getDetailKhachHang(res?.data.Matk);
        dispatch(updateUser({ ...res.data, access_token: token }));
        dispatch(updateKhachHang(resKh?.data));
    };


    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleOnChangeTenKH = (e) => {
        setTenKH(e.target.value);
    };
    const handleOnChangeNgaysinh = (e) => {
        setNgaysinh(e.target.value);
    };
    const handleOnChangeSoDT = (e) => {
        setSoDT(e.target.value);
    };
    const handleOnChangeGioiTinh = (e) => {
        setGioitinh(e.target.value);
    };
    const handleOnChangeAvatar = async ({ fileList }) => {
        const file = fileList[0];
        if (file && !file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setAvatar(file.preview || file.url);
    };

    const handleUpdate = () => {
        if (email !== user.Email) {
            userMutation.mutate({ id: user?.idtk, Email: email, access_token: user?.access_token });
        }
        if (TenKH !== user.TenKH || Ngaysinh !== user.Ngaysinh || SoDT !== user.SoDT || Gioitinh !== user.Gioitinh || Avatar !== user.Avatar) {
            khachHangMutation.mutate({ id: user?.idkh, TenKH, Ngaysinh, SoDT, Gioitinh, Avatar, access_token: user?.access_token });
        }
    };

    return (
        <div style={{
            width: '100%',
            padding: '20px 120px',
            margin: '0 auto'
        }}>
            <WrapperHeader>Thông tin người dùng</WrapperHeader>
            <Loading isLoading={isLoadingUser || isLoadingKhachHang}>
                <WrapperContentProfile>
                    <WrapperInput>
                        <WrapperLabel htmlFor="tenkh">Họ và Tên</WrapperLabel>
                        <InputForm style={{ width: '300px' }} id="tenkh" value={TenKH} onChange={handleOnChangeTenKH} />
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor="name">Tài Khoản</WrapperLabel>
                        <InputForm style={{ width: '300px', backgroundColor: '#fff', color: 'black' }} id="name" value={name} disabled />
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor="email">Email</WrapperLabel>
                        <InputForm style={{ width: '300px' }} id="email" value={email} onChange={handleOnChangeEmail} />
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor="phone">Số điện thoại</WrapperLabel>
                        <InputForm style={{ width: '300px' }} id="phone" value={SoDT} onChange={handleOnChangeSoDT} />
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor="ngaysinh">Ngày sinh</WrapperLabel>
                        <InputForm style={{ width: '300px' }} id="ngaysinh" value={Ngaysinh} onChange={handleOnChangeNgaysinh} />
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor="gioitinh">Giới Tính</WrapperLabel>
                        <InputForm style={{ width: '300px' }} id="gioitinh" value={Gioitinh} onChange={handleOnChangeGioiTinh} />
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor="avatar">Ảnh đại diện</WrapperLabel>
                        <WrapperUploadFile onChange={handleOnChangeAvatar} maxCount={1}>
                            <Button icon={<UploadOutlined />} >Select File</Button>
                        </WrapperUploadFile>
                        {Avatar && (
                            <img src={Avatar} alt="avatar" style={{ width: '50px', height: '50px', borderRadius: '50%', ObjectFit: 'cover' }} />
                        )}
                    </WrapperInput>
                    <ButtonComponent
                        onClick={handleUpdate}
                        size={40}
                        styleButton={{
                            height: '30px',
                            width: 'fit-content',
                            borderRadius: '4px',
                            padding: '4px 6px',
                            margin: '0 auto'
                        }}
                        textButton={'Cập nhật'}
                        styleTextButton={{ color: 'rgb(26, 148, 255)', fontsize: '15px', fontweight: '700' }}
                    />
                </WrapperContentProfile>
            </Loading>
        </div>
    );
};

export default ProfilePage;