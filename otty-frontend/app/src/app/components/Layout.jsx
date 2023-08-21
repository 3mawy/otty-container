import React from "react";
import {ThemeProvider} from "../themeContext";
import {GiAnimalHide} from "react-icons/gi";
import HamburgerMenu from "./NavigationBar/HamburgerMenu";

import {IoPerson} from "react-icons/io5";
import NavigationBar from "./NavigationBar/NavigationBar";

const Layout = ({children}) => {

    return (
        <ThemeProvider>
            <div
                className={'dark:bg-dark400 bg-primary duration-500 relative font-poppins rtl:font-vazirmatn dark:text-light h-[100dvh] '}>
                <NavigationBar/>
                <div className={`mb-auto relative h-[100%] pt-[4rem]`}>
                    {children}
                </div>
                {/*<Footer/>*/}
            </div>
        </ThemeProvider>
    );
};

export default Layout;
