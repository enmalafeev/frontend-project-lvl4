import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import routes from '../routes';
// import io from 'socket.io-client';

// const socket = io();

export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');

export const socketConnected = createAction('SOCKET_STATUS_CONNECTED');

export const socketMessageRecieved = createAction('SOCKET_MESSAGE_RECEIVED');

export const showModal = createAction('SHOW_MODAL');

export const addMessage = (message, channelId) => async () => {
  const url = routes.channelMessagesPath(channelId);
  await axios.post(url, message);
};
