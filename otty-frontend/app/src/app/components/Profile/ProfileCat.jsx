import React, {useEffect} from 'react';
import Cat from "../../../images/Cat.svg";

const ProfileCat = () => {
    useEffect(() => {
        const pupils = document.querySelectorAll(".eye .pupil");
        window.addEventListener("mousemove", (e) => {
            pupils.forEach((pupil) => {
                // get x and y postion of cursor
                var rect = pupil.getBoundingClientRect();
                var x = (e.pageX - rect.left) / 350 + "px";
                var y = (e.pageY - rect.top) / 350 + "px";
                pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
            });
        });
    })

    return (
        <>

            <div className={"absolute right-0 left-0 h-40 overflow-hidden bg-red-200 grid place-content-center rounded-t-md"}>

                    <div className={'h-[100px] w-[550px]   absolute '}>
                        <div className={"grid grid-cols-2 -mt-20 items-center place-content-center"}>
                            <div className={'col-span-2 '}><img src={Cat} alt=""/>
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