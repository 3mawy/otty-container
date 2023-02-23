import React, {useState} from 'react';

const ImageGallery = ({images}) => {
    const [currentImage, setCurrentImage] = useState(null)
    const [imageView, SetImageView] = useState(false)

    return (
        <div className=" grid grid-cols-4 gap-2 pt-4" style={{textAlign: "left"}}>
            {imageView && <div
                className={'fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-70 grid place-content-center z-50'}
                onClick={() => SetImageView(false)}>
                <div className="absolute top-0 right-0">
                    <button className={`h-14 w-11 m-1 text-xl font-bold text-white`}
                            onClick={() => SetImageView(false)}> X
                    </button>
                </div>
                <img src={currentImage}/>
            </div>}
            {images.map((image, index) => (<div
                key={image?.id}
                className="image-item relative "
                onClick={() => {
                    setCurrentImage(image.url)
                    SetImageView(true)
                }}
            >
                <img
                    src={image?.url}
                    alt=""
                    className={`aspect-square object-cover rounded-md`}
                />

            </div>))}
        </div>

    );
};

export default ImageGallery;