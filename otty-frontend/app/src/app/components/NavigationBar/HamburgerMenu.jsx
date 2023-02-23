import React, {useState} from 'react';
import {GiCat, GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineNotification} from "react-icons/ai";
import {Transition} from "@headlessui/react";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`justify-self-end justify-self-end col-span-2 mx-3 text-amber-600 relative `}>
            <div>
                <button className={` ${isOpen && 'text-amber-700 ease-in transition duration-200'}`}>
                    <GiHamburgerMenu className={`w-auto  min-h-[3rem] h-[6vh] p-2`}
                                     onClick={() => setIsOpen(!isOpen)}/></button>
                <Transition
                    show={isOpen}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={`w-auto h-96  absolute right-0 left-0 pt-3 `}>
                        <button className={` bg-amber-300 mb-2 p-2 rounded-full mx-auto`}>
                            <GiCat className={`w-7 h-7`}/>
                        </button>
                        <button className={` bg-amber-300 mb-2 p-2 rounded-full mx-auto`}>
                            <AiOutlineNotification className={`w-7 h-7 `}/>
                        </button>
                    </div>
                </Transition>
            </div>
        </div>
    );
};

export default HamburgerMenu;