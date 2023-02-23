import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import ImagePreview from './ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview

function Html5Camera (props) {
    const [dataUri, setDataUri] = useState('');

    function handleTakePhotoAnimationDone (dataUri) {
        console.log('takePhoto');
        setDataUri(dataUri);
    }

    const isFullscreen = false;
    return (
        <div className={`absolute z-50 h-screen w-screen `}>
            {
                (dataUri)

                    ? <ImagePreview dataUri={dataUri}
                                    isFullscreen={isFullscreen}
                    />
                    : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
                              isFullscreen={isFullscreen} idealFacingMode = {"environment"}
                    />
            }
        </div>
    );
}
export default Html5Camera;