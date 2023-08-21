import React from 'react';
import {IoPerson} from "react-icons/io5";
import {GiAnimalHide} from "react-icons/gi";
import HamburgerMenu from "./HamburgerMenu";
import {Link} from "react-router-dom";
import logo from "../../../images/logo.svg"

const NavigationBar = () => {
    return (
        <div
            className={`bg-gray-100 border-b-black border-opacity-5 border-b-2 absolute right-0 left-0 z-50 `}>
            <div
                className={"h-[4rem] 2xl:container mx-auto grid grid-cols-5 justify-items-stretch z-50 relative place-items-center"}>
                <div className={`justify-self-start mx-3 text-main-orange `}>
                    <Link to={`/profile`}>
                        <IoPerson className={`w-auto h-[6vh]  min-h-[3rem] p-2  `}/>
                    </Link>
                </div>
                <div className={`justify-self-center col-start-3 col-end-4   `}>
                    <Link to={`/`}>
                        <img src={logo}
                             className={' absolute top-0 right-0 left-0 w-auto min-h-[2rem] h-20  mx-auto text text-main-orange'}/>
                    </Link>
                </div>
                <HamburgerMenu/>
            </div>

        </div>
    );
};

export default NavigationBar;
