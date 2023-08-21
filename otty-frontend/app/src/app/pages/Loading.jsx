import React from 'react';
import {MagnifyingGlass} from "react-loader-spinner";
import CatLocation from "../components/Map/img/CatLocation";

const Loading = () => {
    return (
        <div>

            <div className={'bg-main-orange h-screen place-items-center grid z-20 relative'}>
                <div className={'absolute '}>
                    <CatLocation className={'h-52 w-52'} />
                </div>
                <div className={'absolute mt-28 ml-28'}>
                    <MagnifyingGlass
                        visible={true}
                        height="250"
                        width="250"
                        ariaLabel="MagnifyingGlass-loading"
                        wrapperStyle={{}}
                        wrapperClass="MagnifyingGlass-wrapper"
                        glassColor='#c0efff'
                        color='#e15b64'
                    />
                </div>
               </div>

        </div>
    );
};

export default Loading;