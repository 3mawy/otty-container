import {combineReducers} from "@reduxjs/toolkit";
import {apiSlice} from "./api/apiSlice";
import CatPostsSlice from "./posts/catPostsSlice";
 import authSlice from "./auth/authSlice";


const reducers_collection = {
    [apiSlice.reducerPath]: apiSlice.reducer,
     auth: authSlice,
    catPosts: CatPostsSlice,
}

export default combineReducers(reducers_collection);
