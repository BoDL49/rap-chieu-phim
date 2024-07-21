import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    Email: '',
    TenKH: '',
    SoDT: '',
    Ngaysinh: '',
    Gioitinh: '',
    Avatar: '',
    Matk: '',
    idtk: '',
    idkh: '',
    access_token: ''
}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const { Tentk = '', Email = '', access_token = '', Matk = '', _id = '' } = action.payload
            state.name = Tentk;
            state.Email = Email;
            state.Matk = Matk;
            state.idtk = _id;
            state.access_token = access_token;
        },
        updateKhachHang: (state, action) => {
            const { TenKH = '', SoDT = '', Ngaysinh = '', Gioitinh = '', Avatar = '', _id = '' } = action.payload
            state.TenKH = TenKH;
            state.SoDT = SoDT;
            state.Ngaysinh = Ngaysinh;
            state.Gioitinh = Gioitinh;
            state.Avatar = Avatar;
            state.idkh = _id;
        },
        resetUser: (state) => {
            state.name = '';
            state.Email = '';
            state.access_token = '';
            state.TenKH = '';
            state.SoDT = '';
            state.Ngaysinh = '';
            state.Gioitinh = '';
            state.Avatar = '';
            state.idkh = '';
            state.idtk = '';
        }
    },
})

export const { updateUser, resetUser, updateKhachHang } = userSlide.actions

export default userSlide.reducer