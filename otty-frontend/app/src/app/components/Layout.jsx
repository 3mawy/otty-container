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
                className={'dark:bg-dark400 bg-red-100 duration-500 relative font-poppins rtl:font-vazirmatn dark:text-light relative h-screen'}>
                <NavigationBar/>
                <div className={`mb-auto relative h-[94vh]`}>
                    {children}
                </div>
                {/*<Footer/>*/}
            </div>
        </ThemeProvider>
    );
};

export default Layout;
