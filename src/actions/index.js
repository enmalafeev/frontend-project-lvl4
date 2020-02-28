import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import routes from '../routes';

export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');

export const addMessage = (message, channelId) => async (dispatch) => {
  const url = routes.channelMessagesPath(channelId);
  await axios.post(url, message);
  dispatch(addMessageSuccess());
};
