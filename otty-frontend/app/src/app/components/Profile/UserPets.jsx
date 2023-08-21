import React from 'react';
import {FaEdit} from "react-icons/fa";

const UserPets = ({user}) => {
    return (<>
            {user?.ownedPets?.length > 0 &&
                <div className={" bg-main-orange w-[100%] rounded-md grid max-w-[28rem] py-8 relative mx-auto shadow-md"}>
                    <h2 className={"pb-5 text-2xl"}> Your Pets List</h2>

                    {user.ownedPets.map((pet) => (
                        <div className="h-24 bg-light-orange my-2 items-center flex justify-between px-5">
                            <div className="flex items-center space-x-4">

                                <img src={pet.image} alt={''}
                                     className="bg-main-orange w-20 h-20 rounded-full object-cover "/>
                                <p className="text-2xl pt-1">{pet.name}</p>
                            </div>
                            <FaEdit className={'text-2xl hover:animate-pulse cursor-pointer'}
                                    onClick={console.log("aaa")}/>

                        </div>
                    ))}
                </div>}
        </>
    );
};

export default UserPets;