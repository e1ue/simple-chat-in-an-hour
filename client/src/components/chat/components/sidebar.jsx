import React, {useEffect, useState} from 'react';

const SideBar = ({socket}) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        socket.on('responseNewUser', (data) => setUsers(data))
    }, [socket, users])

    const filteredList = users.filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.user === value.user && t.socketID === value.socketID
            ))
    )

    return (
        <div className="sidebar">
            <h4 className="text-2xl font-bold">Users</h4>
            <ul>
                {
                    filteredList.map(element => (
                        <li key={element.socketID}>{element.user}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SideBar;
