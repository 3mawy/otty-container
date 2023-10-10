const express = require('express');
const http = require('http');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const {Server} = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

const secretKey = "W9Puj4ooTfm0dahhjkPLBfYd9yZR1JFduWdV8o4ACR134MZhikjmbVztnTlstTuY"; // Use the key from your .env file

io.on('connection', (socket) => {
    const token = socket.handshake.query.token;

    try {
        const decodedToken = jwt.verify(token, secretKey);
        const userId = decodedToken.sub;

        socket.userId = userId;

        socket.on('privateChat', (recipientUserId, message) => {
            const roomName = getPrivateRoomName(userId, recipientUserId);

            socket.to(roomName).emit('privateChat', {
                userId: userId,
                message: message,
            });
        });
        // User specifies a room ID they want to join (for example, "room123")
        const desiredRoom = "room123";
        socket.join(desiredRoom); // Join the specified room

        socket.on('chat message', (message) => {

            io.to(desiredRoom).emit('chat message', {
                userId: userId,
                message: message
            });
        });
        function getPrivateRoomName(userId1, userId2) {
            const sortedUserIds = [userId1, userId2].sort();
            return `private-${sortedUserIds[0]}-${sortedUserIds[1]}`;
        }
        socket.on('disconnect', () => {
            socket.leave(desiredRoom);
        });

    } catch (error) {
        console.error('Token verification failed:', error);
    }
});

server.listen(3005, () => {
    console.log('Server listening on port 3005');
});
