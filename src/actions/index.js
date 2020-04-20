import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import routes from '../routes';

export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');

export const socketConnected = createAction('SOCKET_STATUS_CONNECTED');

export const socketMessageRecieved = createAction('SOCKET_MESSAGE_RECEIVED');

export const addMessage = (message, channelId) => async () => {
  const url = routes.channelMessagesPath(channelId);
  await axios.post(url, message);
};
