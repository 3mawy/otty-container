import {apiSlice} from "../api/apiSlice";

export const chatApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            providesTags: ['GetUsers']
        }),

    })
})
export const {
    useGetUsersQuery
} = chatApiSlice;