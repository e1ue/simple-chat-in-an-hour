import React from 'react';
import {useNavigate} from "react-router-dom";

const BodyChat = ({messages}) => {

    const navigate = useNavigate()
    const handleLeave = () => {
        localStorage.removeItem('user')
        navigate('/')
    }

    return (
        <div>
            <header className="p-[15px] flex justify-end">
                <button onClick={handleLeave} className="btn">Покинуть чат</button>
            </header>

            <hr className="w-full border-white/[.25]"/>

            <div className="p-[15px] space-y-[15px]">
                {
                    messages.map(element =>
                        element.name === localStorage.getItem('user') ? (
                            <div
                                key={element.id}
                                className="flex justify-end"
                            >
                                <div>
                                    <p className="text-end">Вы</p>
                                    <div className="bg-white text-black px-[15px] py-[8px] rounded-lg">
                                        <p>{element.text}</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                key={element.id}
                                className="flex"
                            >
                                <div>
                                    <p>{element.name}</p>
                                    <div className="bg-purple-200 text-black px-[15px] py-[8px] rounded-lg">
                                        <p>{element.text}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>

        </div>
    );
};

export default BodyChat;
