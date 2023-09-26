import io, { Socket } from 'socket.io-client';
import { Conversation, Message } from '@backend/types';

let socket: Socket;

// connect socket server
export const connectWithSocketServer = () => {
  socket = io(process.env.REACT_APP_SOCKET_SERVER_URL as string);

  socket.on('connect', () => {
    console.log('connected with socket server!', socket.id);
  });
};

// send conversation message to socket server
export const sendConvMessage = (
  message: Message,
  conversationId: Conversation['id']
) => {
  socket.emit('conversation-message', {
    message,
    conversationId,
  });
};
