// Import the RTK Query methods from the React-specific entry point
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import {setCredentials, logOut} from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://ottty.egchameleon.com/api',
    // credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
        const token = getState().auth.token;

        // headers.set('authorization', `Bearer ${token}`);
        headers.set('Content-Type', `application/json`);
        // return headers;
    },
})

// TODO: edit refresh token logic
const baseQueryWithRefreshAuth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.status === 401) {
        console.log('sending refresh token')
        // send refresh token to get new access token
        const refreshResult = await baseQuery('/auth/refresh', api, extraOptions)
        console.log(refreshResult)
        if (refreshResult.data) {
            const email = api.getState().auth.userEmail
            // store the new token
            // api.dispatch(setCredentials({...refreshResult.data, 'email':email} ))
        }
        result = await baseQuery(args, api, extraOptions)
    }
    return result
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithRefreshAuth,
    tagTypes: ['CatPosts'],
    endpoints: builder => ({


    })
})

export const {

} = apiSlice
