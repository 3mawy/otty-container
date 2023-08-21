import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import ChatMessage from './ChatMessage';
import {IoAttach, IoSend} from 'react-icons/io5';

const ChatWindow = ({token, messages, sendMessage}) => {
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        adjustTextareaHeight();
    }, [messageInput]);

    const adjustTextareaHeight = () => {
        const textarea = document.getElementById('chat-field');
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    const handleTextareaChange = (e) => {
        setMessageInput(e.target.value);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (messageInput.trim() !== '') {
            sendMessage(messageInput);
            setMessageInput('');
        }
    };

    return (
        <>
            <div
                className="bg-main-orange rounded-t-md flex flex-col h-full gap-4 w-full px-3 py-6 relative shadow-md overflow-y-scroll">
                {messages.map((message, index) => (
                    <ChatMessage key={index} userId={message.userId} text={message.message}/>
                ))}
            </div>
            <div className="bg-light-orange rounded-b-md flex mb-16 gap-4 py-8 relative place-items-center">
                <form className="flex justify-evenly min-w-full">
                    <div className=" w-14 relative">
                        <IoAttach size={60} className="text-gray-700 absolute h-14 w-14 bottom-0"/>
                    </div>
                    <textarea
                        className="w-[80%] bg-gray-50 rounded-full max-h-24 appearance-none border-2 border-gray-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-200 resize-none"
                        id="chat-field"
                        value={messageInput}
                        onChange={handleTextareaChange}
                    />

                    <div className=" max-h-24 w-14 mx-3 relative">
                        <button onClick={handleFormSubmit}><IoSend size={60}
                                                                   className="text-gray-700 absolute h-14 w-14 bottom-0"/>
                        </button>
                    </div>
                </form>
                <div className="bg-primary w-[80%] "></div>
            </div>
        </>
    );
};

export default ChatWindow;
