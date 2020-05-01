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
    addMessageRequest(state) {
      state.processing = true;
    },
    addMessageSuccess: (state, action) => {
      const { data: { attributes } } = action.payload;
      state.messages.push(attributes);
      state.processing = false;
    },
    addMessageFailure(state) {
      state.processing = false;
    },
  },
  extraReducers: {
    [channelActions.removeChannelSuccess](state, { payload: { data: { id } } }) {
      _.remove(state.messages, (message) => message.channelId === id);
    },
  },
});

const { addMessageRequest, addMessageFailure } = slice.actions;

const addMessage = (message, channelId) => async (dispatch) => {
  dispatch(addMessageRequest());
  try {
    const url = routes.channelMessagesPath(channelId);
    await axios.post(url, message);
  } catch (e) {
    dispatch(addMessageFailure());
    throw e;
  }
};

const { actions } = slice;
export { actions, addMessage };
export default slice.reducer;
