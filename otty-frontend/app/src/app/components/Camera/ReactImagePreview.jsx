import React, {useState} from 'react';
import {BiCheck, BiReset, BiWindowClose} from "react-icons/bi";
import {CgClose} from "react-icons/cg";
import CircleButton from "../Misc/Buttons/CircleButton";

const ReactImagePreview = ({imgSrc, cameraToggle, onRetake}) => {
    const [extraInfo, setExtraInfo] = useState('')
    const [viewImgToggle, setViewImgToggle] = useState(false)

    function confirmImage() {
        console.log('aloooooooooo')
    }

    return (
        <div className={`z-50 absolute mx-auto w-full h-full grid bg-black bg-opacity-50`}>
            {viewImgToggle ? (<div className={`z-50 w-full h-full absolute`}>
                <img className={`bg-red-600 w-auto mx-auto h-full object-cover bg-cover `}
                     src={imgSrc}
                />
                <button onClick={() => setViewImgToggle(false)}
                        className={`bg-red-400 absolute top-5 right-5 p-2 rounded-full`}>
                    <CgClose className={`w-9 h-9`}/>
                </button>
            </div>) : ('')}
            <form className={`p-5 mx-auto my-auto w-[22rem]  relative  bg-red-100 rounded-lg`}>
                <img className={`bg-red-600 h-96 w-80 mx-auto object-cover bg-cover rounded-lg`}
                     src={imgSrc} onClick={() => setViewImgToggle(!viewImgToggle)}
                />
                <textarea id="moreInfo" onChange={(e) => setExtraInfo(e.target.value)} rows={8}
                          className={`rounded-lg my-5 max-w-80 w-full p-2  mx-auto appearance-none focus-visible:outline-0`}
                          placeholder={`Extra Info`}/>
                <div className={`flex space-x-4 justify-center`}>
                    <CircleButton  Icon={BiCheck} onClick={confirmImage}/>
                    <CircleButton  Icon={BiReset} onClick={onRetake} bg={`bg-red-400`}/>
                </div>
            </form>
        </div>
    );
};

export default ReactImagePreview;
