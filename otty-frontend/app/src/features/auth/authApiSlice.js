import {apiSlice} from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/login',
                method: 'POST',
                body: {...credentials},
            })
        }),
        register: builder.mutation({
            query: credentials => ({
                url: '/auth/register',
                method: 'POST',
                body: {
                    name: credentials.username,
                    email: credentials.email,
                    password: credentials.password,
                    password_confirmation: credentials.confirmPassword
                },
            }),
            // Pick out data and prevent nested properties in a hook or selector
            // transformResponse: (response, meta, arg) => response.data,
        })
    })
})
export const {
    useLoginMutation,
    useRegisterMutation
} = authApiSlice;