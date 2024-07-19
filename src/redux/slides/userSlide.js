import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    Email: '',
    access_token: ''
}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const { Tentk, Email, access_token } = action.payload
            state.name = Tentk || Email;
            state.Email = Email;
            state.access_token = access_token;
        },
        resetUser: (state) => {
            state.name = '';
            state.Email = '';
            state.access_token = '';
        }
    },
})

export const { updateUser, resetUser } = userSlide.actions

export default userSlide.reducer