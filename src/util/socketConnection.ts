import io from 'socket.io-client';

// connect socket server

export const connectWithSocketServer = () => {
  const socket = io(process.env.REACT_APP_SOCKET_SERVER_URL as string);

  socket.on('connect', () => {
    console.log('connected with socket server!', socket.id);
  });
};
