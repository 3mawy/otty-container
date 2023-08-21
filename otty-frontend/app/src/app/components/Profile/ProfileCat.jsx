import React, {useEffect, useState} from 'react';
import Cat from "../../../images/Cat.svg";

const ProfileCat = () => {
    const colors = {
        "pink":"-hue-rotate-60",
        "blue":"hue-rotate-180",
        "purple":"hue-rotate-[200deg]",
        "black":"invert grayscale brightness-150",
        "orange":""

    }
    const [petColor, setPetColor] = useState('')
    useEffect(() => {
        const pupils = document.querySelectorAll(".eye .pupil");
        window.addEventListener("mousemove", (e) => {
            pupils.forEach((pupil) => {
                // get x and y postion of cursor
                const rect = pupil.getBoundingClientRect();
                const x = (e.pageX - rect.left) / 350 + "px";
                const y = (e.pageY - rect.top) / 350 + "px";
                pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
            });
        });
    })

    return (
        <>
            <div className="absolute top-1 left-4 space-y-2 z-50">
                {/* Add buttons or controls to change the color */}
                <button
                    onClick={() => setPetColor("pink")}
                    className="rounded-full w-6 h-6 bg-pink-400 hover:bg-pink-500 transition-colors duration-300 transform hover:scale-110"
                ></button>
                <button
                    onClick={() => setPetColor("blue")}
                    className="rounded-full w-6 h-6 bg-blue-400 hover:bg-blue-500 transition-colors duration-300 transform hover:scale-110"
                ></button>
                <button
                    onClick={() => setPetColor("purple")}
                    className="rounded-full w-6 h-6 bg-purple-400 hover:bg-purple-500 transition-colors duration-300 transform hover:scale-110"
                ></button>
                <button
                    onClick={() => setPetColor("black")}
                    className="rounded-full w-6 h-6 bg-black hover:bg-gray-800 transition-colors duration-300 transform hover:scale-110"
                ></button>
                <button
                    onClick={() => setPetColor("orange")}
                    className="rounded-full w-6 h-6 bg-main-orange hover:bg-main-orange-200 transition-colors duration-300 transform hover:scale-110"
                ></button>
            </div>


            <div className={"absolute  right-0 left-0 h-40 overflow-hidden bg-red-200 grid place-content-center rounded-t-md"}>

                    <div className={'h-[100px] w-[550px] ml-24 mb-52 sticky'}>
                        <div className={"grid grid-cols-2 items-center "}>
                            <div className={'col-span-2 '}>
                                <img src={Cat} className={`${colors[petColor]}`}
                                     alt=""/>
                            </div>
                            <div className="eyes absolute -mt-20 ml-[60px]">
                                <div className="eye">
                                    <div className="pupil"></div>
                                </div>
                                <div className="eye">
                                    <div className="pupil"></div>
                                </div>
                            </div>
                        </div>

                    </div>

            </div>

        </>

    );
};

export default ProfileCat;