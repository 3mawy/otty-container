import {useSelector} from "react-redux";
import {selectCurrentToken} from "../../features/auth/authSlice";
import ChatUsersList from "../components/Chat/ChatUsersList";
import ChatWindow from "../components/Chat/ChatWindow";
import { io } from "socket.io-client";
import {useEffect, useState} from "react";


const messages = [
    {
        "id": "1",
        "text": "سلام! چطور می‌توانم به شما کمک کنم؟",
        "isSent": false
    },
    {
        "id": "2",
        "text": "Hello, how can I assist you?",
        "isSent": true
    },
    {
        "id": "3",
        "text": "ممنون، دارم به دنبال اطلاعات در مورد محصولات شما می‌گردم.ممنون، دارم به دنبال اطلاعات در مورد محصولات شما می‌گردم.ممنون، دارم به دنبال اطلاعات در مورد محصولات شما می‌گردم.ممنون، دارم به دنبال اطلاعات در مورد محصولات شما می‌گردم.ممنون، دارم به دنبال اطلاعات در مورد محصولات شما می‌گردم.",
        "isSent": false
    },
    {
        "id": "4",
        "text": "Sure, I'd be happy to help! What information are you looking for?",
        "isSent": true
    },
    {
        "id": "5",
        "text": "آیا تخفیفی بر روی محصولات دارید؟",
        "isSent": false
    },
    {
        "id": "6",
        "text": "Yes, we have some great discounts on our products.",
        "isSent": true
    },
    {
        "id": "7",
        "text": "چگونه می‌توانم سفارش خود را از دسترسی‌های مختلف پرداخت بدهم؟",
        "isSent": false
    },
    {
        "id": "8",
        "text": "You can pay for your order using various payment methods.",
        "isSent": true
    }
]


const Chat = () => {

    const token = useSelector(selectCurrentToken);
    // TODO: EDIT URL
    const socket = io('https://otty.nakhlawy.com/', {
        query: { token },
    });

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Event listener for receiving messages
        socket.on('chat message', (messageData) => {
            // Update messages state with the new message
            setMessages((prevMessages) => [...prevMessages, messageData]);
        });
        console.log(messages)

        return () => {
            // Clean up socket event listener when component unmounts
            socket.off('chat message');
        };

    }, [socket]);

    // Function to send messages
    const sendMessage = (message) => {
        // Send message to the server
        socket.emit('chat message', message);
    };

    return (
        <div className={"overflow-clip h-[100%]"}>

            <div className={`flex bg-main-orange min-h-full 2xl:container mx-auto auto-cols-max  `}>
                <div
                    className={`bg-gray-100 w-24 lg:min-w-[22rem] px-7 py-3 h-screen overflow-y-auto overflow-x-clip sm:flex place-content-center hidden`}>
                    <ChatUsersList/>
                </div>
                <div className="bg-gray-200 flex flex-1 flex-col p-3 h-[100dvh] w-full ">
                  <ChatWindow messages={messages} sendMessage={sendMessage} />
                </div>
            </div>

        </div>
    );
};
export default Chat;


// const Chat = () => {
//
//     const token = useSelector(selectCurrentToken)
//
//     return (
//         <div className="App">
//             <ChatWindow token={token} />
//         </div>
//     );
// };
// export default Chat;
