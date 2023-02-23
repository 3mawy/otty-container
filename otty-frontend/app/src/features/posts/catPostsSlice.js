import {createSlice} from "@reduxjs/toolkit"

const catPostsSlice = createSlice({
// TODO: clean up this code's action thats not needed temporarily
    name: 'catPosts',
    initialState: {
        posts: [],
        currentPost: {},
        trackPost: {}
    },
    reducers: {
        setCurrentPost(state, action) {
            console.log(state.posts)
            state.currentPost = state.posts.find(obj => obj.id === action.payload.id)
        },
        setTrackPost(state, action) {
            state.trackPost = action.payload.post
        }
    },
})

export const {
    setCurrentPost,
    setTrackPost

} = catPostsSlice.actions

export default catPostsSlice.reducer

export const selectCatPosts = (state) => state.catPosts.posts
export const selectTrackPost = (state) => state.catPosts.trackPost
export const selectCurrentPost = (state) => state.catPosts.currentPost

