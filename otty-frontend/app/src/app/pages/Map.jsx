import React from 'react';
import {useGetCatPostsQuery} from "../../features/posts/catPostsApiSlice";
import {Outlet} from "react-router-dom";
import GoogleMapComponent from "../components/Map/GoogleMapComponent";
import {MagnifyingGlass} from "react-loader-spinner";
import Loading from "./Loading";


const Map = () => {

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCatPostsQuery();

    let content
    if (isLoading) {
        content = <Loading/>
    } else if (isSuccess) {
        content =
            <div className={'h-[100dvh]'}>

                <GoogleMapComponent posts={data}/>
                {/*<LeafletMap posts={data}/>*/}
            </div>
    } else if (isError) {
        content = <div className={'h-[100dvh]'}><GoogleMapComponent/></div>

    }
    return (
        <>
            <div className={`relative z-30 top-0 left-0 right-0 bottom-0`}>
                {content}
            </div>
            <Outlet/>
        </>

    );
};

export default Map;
