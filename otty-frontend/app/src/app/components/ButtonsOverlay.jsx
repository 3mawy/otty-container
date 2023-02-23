import React from 'react';
import {BiCamera, BiUpload} from "react-icons/bi";
import CircleButton from "./Misc/Buttons/CircleButton";

const ButtonsOverlay = ({lost}) => {
    return (
        <div className={`justify-center flex z-40 fixed space-x-5 bottom-4 w-full `}>
            {!lost &&
                <CircleButton link={`/map/camera`} text={`Camera`} Icon={BiCamera} bg={`bg-red-400`}/>
            }
            <CircleButton link={`/map/upload`} text={`Upload`} Icon={BiUpload}/>
        </div>
    );
};

export default ButtonsOverlay;
