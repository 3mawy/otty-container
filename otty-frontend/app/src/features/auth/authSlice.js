import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { id: null, userEmail: null, userName: null, token: null },
    reducers: {
        setCredentials: (state, action) => {
            const { token, user, userEmail, userName, id } = action.payload
            console.log(action.payload)
            state.id = id
            state.userEmail = userEmail
            state.token = token
            state.userName = userName
        },
        logOut: (state, action) => {
            state.id = null
            state.userName = null
            state.userEmail = null
            state.token = null
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUserEmail = (state) => state.auth.userEmail
export const selectCurrentUserId = (state) => state.auth.id
export const selectCurrentToken = (state) => state.auth.token