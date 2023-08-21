import React from "react";
import {langDirection} from "./helper";
import {useDispatch} from "react-redux";
import {useGetUsersQuery} from "../../../features/chat/chatApiSlice";

const ChatUsersList = ({users}) => {
    const dispatch = useDispatch();
    const {data, isSuccess, isLoading, isError, error} = useGetUsersQuery();
    return (
        <div className={`flex flex-col gap-4 lg:w-full`}>
            <div className={` `}>
                <p className={"text-2xl rounded-xl text-left"}>Chats</p>
            </div>
            {data?.map((user) => (
                <div key={user.id}
                     className={"cursor-pointer text-xl bg-main-orange hover:bg-main-orange-200 w-16 lg:w-auto rounded-2xl h-16 flex place-items-center mx-auto lg:mx-0 overflow-clip gap-2"}>
                    <img className={"w-16 h-16 bg-red-400"} alt={"user img"}></img>
                    <p className={"hidden lg:block "}>{user.name}</p>
                </div>
            ))}
        </div>
    );
};

export default ChatUsersList;
