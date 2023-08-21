import React from "react";
import {langDirection} from "./helper";
import {selectCurrentUserId} from "../../../features/auth/authSlice";
import {useSelector} from "react-redux";

const ChatMessage = ({text, userId}) => {
    const id = useSelector(selectCurrentUserId).toString();
    const alignmentClass = (id === userId) ? "justify-end" : "justify-start";
    const colorClass = (id === userId) ? "bg-green-200" : "bg-red-200";
    const langDir = langDirection(text)
    console.log(`id: ${id}`)
    console.log(`Userid: ${userId}`)
    console.log(id === userId)
    return (
        <div className={`flex ${alignmentClass}`}>
            <div className={`w-fit max-w-md p-4 break-words rounded-xl ${langDir} ${colorClass}`}>{text}</div>
        </div>
    );
};

export default ChatMessage;
