let connectedUsers = [];


const socket = io => {
    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
            const users = connectedUsers.filter(item => socket.id !== item.socketId)
            connectedUsers = users;
             io.emit('connectedUsers', connectedUsers);
        });
        socket.on('message', data => {
            const users = connectedUsers.find(item => data.to !== item.id)
            io.emit(`message-${data.to}`, data)
        })
        socket.on('newUser', (id) => {
            let newUser = [];
            const index = connectedUsers.findIndex(item => item.id === id);
            if (index >= 0) {
                newUser = connectedUsers.map((item, i) => {
                    return (index == i) ? { ...item, socketId: socket.id } : item;
                })
                connectedUsers = newUser;
            } else {
                connectedUsers.push({
                    socketId: socket.id,
                    id
                })
            }
            io.emit('connectedUsers', connectedUsers);

        });
    });
}

module.exports = { socket, connectedUsers }