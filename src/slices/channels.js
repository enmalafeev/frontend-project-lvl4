/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash';
import routes from '../routes';

const slice = createSlice({
  name: 'channels',
  initialState: {
    channels: [],
  },
  reducers: {
    initChannels(state, { payload }) {
      state.channels = payload;
    },
    addChannelSuccess(state, { payload }) {
      const { data: { attributes } } = payload;
      state.channels.push(attributes);
    },
    removeChannelSuccess(state, { payload }) {
      const { data: { id } } = payload;
      _.remove(state.channels, (channel) => channel.id === id);
    },
    renameChannelSuccess(state, { payload }) {
      const { data: { attributes: { id, name } } } = payload;
      const channel = state.channels.find((item) => item.id === id);
      channel.name = name;
    },
  },
});

const addChannel = (channelName) => async () => {
  const url = routes.channelsPath();
  await axios.post(url, channelName);
};

const removeChannel = (id) => async () => {
  const url = routes.channelPath(id);
  await axios.delete(url);
};

const renameChannel = (id, newName) => async () => {
  const url = routes.channelPath(id);
  await axios.patch(url, newName);
};

const { actions } = slice;
const asyncActions = {
  addChannel,
  removeChannel,
  renameChannel,
};

export {
  actions,
  asyncActions,
};
export default slice.reducer;
