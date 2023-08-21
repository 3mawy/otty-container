import React from "react";
import ImageUploading from "react-images-uploading";

const maxNumber = 4
const acceptType = ["jpeg", "jpg", "png"]
const maxFileSize = 5500000
const UploadMultiImages = ({onImagesChange, images}) => {

    // const [images, setImages] = React.useState([]);

    const onChange = (imageList, addUpdateIndex) => {
        onImagesChange(imageList)
        // setImages(imageList);
    };
    const onError = () => {
        // setImages([]);
    };
    const printjson = () => {
        document.getElementById("jsonprint").innerHTML = JSON.stringify(images, null, 6).replace(/\n( *)/g, function (match, p1) {
            return "<br>" + "&nbsp;".repeat(p1.length);
        });
        console.log(images);
    };

    return (<div className="App">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                onError={onError}
                maxNumber={maxNumber}
                acceptType={acceptType}
                maxFileSize={maxFileSize}
                dataURLKey="data_url"
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                      errors
                  }) => (<>
                        {errors && (<div className="text-red-600 pb-4 ">
                                <ul>
                                    {errors.maxNumber && (<li>مينفعش اكتر من 4 صور</li>)}
                                    {errors.acceptType && (<li>!مش مسموح غير صور</li>)}
                                    {errors.maxFileSize && (<li>حجم الصور كبير شويه</li>)}
                                </ul>
                            </div>)}

                        <div className="upload__image-wrapper">
                            <div
                                className=" bg-red-500 text-white cursor-pointer rounded-md text-xl py-2 text-center"
                                {...dragProps}
                                onClick={onImageUpload}
                                style={isDragging ? {backgroundColor: "#afafaf", color: "white"} : undefined}
                            >
                                دوس هنا عشان تضيف صور
                            </div>

                            <div className=" grid grid-cols-4 gap-2 pt-4" style={{textAlign: "left"}}>
                                {imageList.map((image, index) => (<div
                                        key={index}
                                        className="image-item relative "

                                    >
                                        <img
                                            src={image["data_url"]}
                                            alt=""
                                            className={`aspect-square object-cover rounded-md`}
                                        />
                                        <div className=" absolute top-0 right-0">
                                                <button
                                                    className={`bg-red-600 rounded-md h-4 w-4 m-1 text-xs font-bold text-white`}
                                                    onClick={() => onImageRemove(index)}
                                                >
                                                        X
                                                </button>
                                        </div>
                                    </div>))}
                            </div>
                        </div>
                    </>)}
            </ImageUploading>
        </div>);
};

export default UploadMultiImages;
