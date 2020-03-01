import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import routes from '../routes';
// import io from 'socket.io-client';

// const socket = io();

export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');

export const socketConnected = createAction('SOCKET_STATUS_CONNECTED');
export const socketMessageRecieved = createAction('SOCKETS_MESSAGE_RECEIVED');

export const addMessage = (message, channelId) => async (dispatch) => {
  const url = routes.channelMessagesPath(channelId);
  const response = await axios.post(url, message);
  dispatch(addMessageSuccess(response.data));
  // socket.on('newMessage', (message) => {
  //   dispatch(addMessageSuccess(message));
  // })
  
};
