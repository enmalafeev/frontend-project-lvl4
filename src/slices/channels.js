import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

const slice = createSlice({
  name: 'channels',
  initialState: [],
  reducers: {
    addChannelSuccess(state, { payload }) {
      const { data: { attributes } } = payload;
      state.push(attributes);
    },
    removeChannelSuccess(state, { payload }) {
      const { data: { id } } = payload;
      return state.filter((channel) => channel.id !== id);
    },
    renameChannelSuccess(state, { payload }) {
      const { data: { attributes: { id, name } } } = payload;
      const channel = state.find((item) => item.id === id);
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
