import io, { Socket } from 'socket.io-client';
import { Conversation, Message, SessionData } from '@backend/types';
import { store, setConversations } from '../state';

let socket: Socket;

// connect socket server
export const connectWithSocketServer = () => {
  socket = io(process.env.REACT_APP_SOCKET_SERVER_URL as string);

  socket.on('connect', () => {
    console.log('connected with socket server!', socket.id);

    // get session history
    socket.emit('session-history', {
      sessionId: localStorage.getItem('sessionId'),
    });

    socket.on('session-details', (data: SessionData) => {
      const { sessionId, conversations } = data;

      // save session id to local storage
      localStorage.setItem('sessionId', sessionId);
      // store the conversations data sent from the server to redux
      store.dispatch(setConversations(conversations));
    });
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
