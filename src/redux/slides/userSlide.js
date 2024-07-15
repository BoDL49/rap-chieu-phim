import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    Email: '',
    access_token: '',
}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {

        }
    },
})

// Action creators are generated for each case reducer function
export const { initialUser } = userSlide.actions

export default userSlide.reducer