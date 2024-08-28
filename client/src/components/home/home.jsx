import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import '../../index.css'

const Home = ({socket}) => {

    const navigate = useNavigate()
    const [user, setUser] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('user', user)
        socket.emit('newUser', {user, socketID: socket.id})
        navigate('/chat')
    }

    return (
            <div className="flex w-full min-h-screen items-center justify-center">
                <form className="flex flex-col space-y-[25px]" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-center">Вход в чат</h2>
                    <input
                        className="outline-none px-4 py-2 rounded-lg"
                        type="text"
                        id='user'
                        value={user}
                        onChange={(e) => setUser(e.target.value)}/>
                    <button
                        className=""
                        type="submit"
                    >Войти</button>
                </form>
            </div>
    );
};

export default Home;
