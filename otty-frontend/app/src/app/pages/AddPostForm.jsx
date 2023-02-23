import React from 'react';
import Map from "./Map";
import ReactImagePreview from "../components/Camera/ReactImagePreview";

const AddPostForm = ({children}) => {
    return (
        <div className={`relative `} >
            <div className={` h-[100%] absolute right-0 top-0 w-screen z-40`}>
                {children}
            </div>
        </div>
    );
};

export default AddPostForm;
