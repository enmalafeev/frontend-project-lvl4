import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import routes from '../routes';

export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');

export const addMessage = (message, channelId) => async (dispatch) => {
  return message;
  // console.log(message);
  // const url = routes.channelMessagesPath(channelId);
  // const response = await axios.post(url, message);
  // dispatch(addMessageSuccess({ message: response.data }));
};

// export const addMessage = (message) => {
//   return message;
//   // console.log(message);
//   // const url = routes.channelMessagesPath(channelId);
//   // const response = await axios.post(url, message);
//   // dispatch(addMessageSuccess({ message: response.data }));
// };