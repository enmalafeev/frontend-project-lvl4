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
    removeChannelSucces(state, { payload: { data: { id } } }) {
      return state.filter((channel) => channel.id !== id);
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

const { actions } = slice;
export { actions, addChannel, removeChannel };
export default slice.reducer;
