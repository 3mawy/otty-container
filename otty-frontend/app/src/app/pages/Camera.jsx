import React, {useCallback, useRef, useState} from 'react';
import {BiCamera} from "react-icons/bi";
import Webcam from "react-webcam";
import {CgClose} from "react-icons/cg";
import {useNavigate} from 'react-router-dom';
import AddPostForm from "./AddPostForm";
import ReactImagePreview from "../components/Camera/ReactImagePreview";

const Camera = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    const videoConstraints = {
        facingMode: {exact: "environment"}
    };
    const navigate = useNavigate();

    return (
        <div className={`h-[100%] absolute right-0 top-0 w-screen z-40`}>
            {imgSrc ? (<AddPostForm><ReactImagePreview imgSrc={imgSrc} onRetake={() => setImgSrc(null)}/></AddPostForm>) : (
                <div className={`absolute z-40 justify-center flex h-[100%]`}>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        // videoConstraints={videoConstraints}
                        screenshotFormat="image/jpeg"
                        className={`w-screen object-cover`}
                    />
                    <button onClick={capture}
                            className={` mx-auto fixed z-50 bottom-5 mx-auto bg-red-400 p-2 rounded-full`}>
                        <BiCamera className={`w-9 h-9 `}/>
                    </button>
                    <button onClick={() => navigate(-1)}
                            className={`absolute z-50 top-4 right-4 mx-auto bg-orange-400 p-2 rounded-full`}>
                        <CgClose className={`w-7 h-7 `}/>
                    </button>
                </div>
            )}

        </div>
    );
};

export default Camera;
