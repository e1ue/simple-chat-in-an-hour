import React, {useEffect, useState} from 'react';
import SideBar from "./components/sidebar.jsx";
import Body from "./components/body.jsx";
import MessageBlock from "./components/message-block.jsx";

const ChatPage = ({socket}) => {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        socket.on('response', (data) => setMessages([...messages, data]))
    }, [socket, messages])

    return (
        <div className="flex">
            <div className="flex justify-between">
                <div className="w-[200px] p-[15px]">
                    <SideBar socket={socket}/>
                </div>
                <div className="w-[1px] min-h-screen bg-white/[.25]"></div>
            </div>
            <main className="w-full flex flex-col justify-between">
                <Body messages={messages}/>
                <MessageBlock socket={socket}/>
            </main>
        </div>
    );
};

export default ChatPage;
