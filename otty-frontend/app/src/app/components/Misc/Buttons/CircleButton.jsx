import React from 'react';
import {Link} from "react-router-dom";
import {BiQuestionMark} from "react-icons/bi";

const CircleButton = (props) => {
    const {link = '', text, Icon = BiQuestionMark, bg = 'bg-blue-400', onClick} = props
    return (
        <Link to={link}>
            <button className={` ${bg} p-2 rounded-full`} onClick={onClick??null}>
                <Icon className={`w-9 h-9 mx-auto`}/>
            </button>
            {text && text}
        </Link>
    );
};

export default CircleButton;
