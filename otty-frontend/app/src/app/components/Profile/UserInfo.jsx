import React from 'react';
import {FaCalendar, FaEdit, FaMapMarkerAlt} from "react-icons/fa";
import ProfileCat from "./ProfileCat";
import userimg from "../../../images/user.jpg";

const UserInfo = ({user}) => {

    return (
        <>
            <FaEdit className={'text-2xl absolute z-20 right-6 top-5 hover:animate-pulse cursor-pointer'} onClick={console.log("aaa")}/>

            <ProfileCat/>
            <div className={'col-span-2 min-h-[3rem] h-32 relative'}>
                <img src={userimg} alt={'aa'} className={'mx-auto bg-orange-200 w-32 h-32 rounded-full'}/>
            </div>
            <div className="col-span-2 relative">
                <h2 className="text-2xl pt-4 pb-3 font-bold">
                    {user.name}
                </h2>
                <p className="text-gray-600">
                    <FaCalendar className="inline-block mr-2"/>
                    Age: {user.age}
                </p>
                <p className="text-gray-600">
                    <FaMapMarkerAlt className="inline-block mr-2"/>
                    Location: {user.location}
                </p>
                <div className="border-b border-orange-400 my-2"></div>
                <div>
                    <h3 className="text-lg  mb-2">Other Information</h3>
                    <p className="text-gray-600">Bio: {user.bio}</p>
                </div>
            </div>
        </>

    );
};

export default UserInfo;