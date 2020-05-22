/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash';
import routes from '../routes';
import { actions as errorActions } from './errors';
import { actions as channelActions } from './channels';

const addMessage = createAsyncThunk(
  'messages/addMessage',
  async ({ message, channelId }, { dispatch }) => {
    try {
      const url = routes.channelMessagesPath(channelId);
      await axios.post(url, message);
    } catch (err) {
      if (!err.response) {
        dispatch(errorActions.addError(err));
        throw err;
      }
    }
  },
);

const slice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
  },
  reducers: {
    initMessages(state, { payload }) {
      state.messages = payload;
    },
  },
  extraReducers: {
    [addMessage.fulfilled]: (state, { payload }) => {
      const { data: { attributes } } = payload;
      state.messages.push(attributes);
    },
    [channelActions.removeChannelSuccess](state, { payload }) {
      const { data: { id } } = payload;
      _.remove(state.messages, (message) => message.channelId === id);
    },
  },
});

const { actions } = slice;
export { actions, addMessage };
export default slice.reducer;
