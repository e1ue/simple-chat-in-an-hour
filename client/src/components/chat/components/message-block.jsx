import React, {useState} from 'react';

const MessageBlock = ({socket}) => {

    const [message, setMessage] = useState('')

    const handleSend = (e) => {
        e.preventDefault()
        if (message.trim() && localStorage.getItem('user')) {
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('user'),
                id: `${socket.id}-${Math.random()}`,
                socketID: socket.id
            })
        }
        setMessage('')
    }

    return (
        <div className="w-full p-[15px]">
            <form className="flex justify-between" onSubmit={handleSend}>
                <input
                    className="outline-none px-4 py-2 rounded-lg w-full mr-[10pxecho "# simple-chat-in-an-hour" >> README.md
                git init
                git add README.md
                git commit -m "first commit"
                git branch -M main
                git remote add origin https://github.com/e1ue/simple-chat-in-an-hour.git
                git push -u origin main]"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button>Отправить</button>
            </form>
        </div>
    );
};

export default MessageBlock;
