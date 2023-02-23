import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { userEmail: null, userName: null, token: null },
    reducers: {
        setCredentials: (state, action) => {
            const { email, access_token, name } = action.payload
            console.log(action.payload)
            state.userEmail = email
            state.token = access_token
            state.userName = name
        },
        logOut: (state, action) => {
            state.userName = null
            state.userEmail = null
            state.token = null
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUserEmail = (state) => state.auth.userEmail
export const selectCurrentToken = (state) => state.auth.token