/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash';
import routes from '../routes';
import { actions as channelActions } from './channels';

const slice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
    processing: false,
  },
  reducers: {
    initMessages(state, { payload }) {
      state.messages = payload;
    },
    addMessageSuccess: (state, action) => {
      const { data: { attributes } } = action.payload;
      state.messages.push(attributes);
    },
  },
  extraReducers: {
    [channelActions.removeChannelSuccess](state, { payload: { data: { id } } }) {
      _.remove(state.messages, (message) => message.channelId === id);
    },
  },
});

const addMessage = (message, channelId) => async () => {
  const url = routes.channelMessagesPath(channelId);
  await axios.post(url, message);
};

const { actions } = slice;
export { actions, addMessage };
export default slice.reducer;
