import React from 'react';
import {IoPerson} from "react-icons/io5";
import {GiAnimalHide} from "react-icons/gi";
import HamburgerMenu from "./HamburgerMenu";
import {Link} from "react-router-dom";

const NavigationBar = () => {
    return (
        <div
            className={`bg-gray-100 border-b-black border-opacity-5 border-b-2 `}>
            <div
                className={"h-[6vh] 2xl:container mx-auto min-h-[3rem] grid grid-cols-5 justify-items-stretch z-50 relative"}>
                <div className={`justify-self-start mx-3 text-amber-600 `}>
                    <Link to={`/profile`}>
                        <IoPerson className={`w-auto h-[6vh]  min-h-[3rem] p-2  `}/>
                    </Link>
                </div>
                <div className={`justify-self-center col-start-3 col-end-4   `}>
                    <Link to={`/`}>

                        <GiAnimalHide
                            className={`absolute top-0 right-0 left-0 w-auto min-h-[2rem] h-[5vh] mx-auto text-amber-600`}/>
                        <GiAnimalHide className={`w-auto min-h-[3rem] h-[7vh] mx-auto text-amber-500 relative`}/>
                    </Link>
                </div>
                <HamburgerMenu/>
            </div>

        </div>
    );
};

export default NavigationBar;
