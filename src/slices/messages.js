/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash';
import routes from '../routes';
import { actions as errorActions } from './errors';
import { actions as channelActions } from './channels';

const slice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
  },
  reducers: {
    initMessages(state, { payload }) {
      state.messages = payload;
    },
    addMessageSuccess: (state, { payload }) => {
      const { data: { attributes } } = payload;
      state.messages.push(attributes);
    },
  },
  extraReducers: {
    [channelActions.removeChannelSuccess](state, { payload }) {
      const { data: { id } } = payload;
      _.remove(state.messages, (message) => message.channelId === id);
    },
  },
});

const addMessage = (message, channelId) => async (dispatch) => {
  try {
    const url = routes.channelMessagesPath(channelId);
    await axios.post(url, message);
  } catch (e) {
    dispatch(errorActions.addError(e));
    throw e;
  }
};

const { actions } = slice;
export { actions, addMessage };
export default slice.reducer;
