import React from 'react';
import {Link} from "react-router-dom";
import {BiQuestionMark} from "react-icons/bi";

const WideButton = (props) => {
    const {link = '', text, bg = 'bg-blue-400'} = props
    return (
        <div>
            <Link to={link}>
                <button className={`w-full h-16 ${bg} rounded-lg text-2xl text-lime-50`}>{text}
                </button>
            </Link>
        </div>
    );
};

export default WideButton;
