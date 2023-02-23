import {apiSlice} from "../api/apiSlice";

export const profileApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProfile: builder.query({
            query: () => ({
                url: '/me/profile',
                method: 'GET',
            }),
            providesTags: ['Profile'],
        }),
        editProfile: builder.mutation({
            query: data => ({
                url: '/me/profile',
                method: 'PATCH',
                body: {...data},
            }),
            invalidatesTags: ['Profile'],
        }),
    })
})
export const {
    useEditProfileMutation,
    useGetProfileQuery,
} = profileApiSlice;