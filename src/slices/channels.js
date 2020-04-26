import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

const slice = createSlice({
  name: 'channels',
  initialState: [],
  reducers: {
    addChannelSuccess(state, action) {
      const { data: { attributes } } = action.payload;
      state.push(attributes);
    },
  },
});

const addChannel = (channelName) => async () => {
  const url = routes.channelsPath();
  await axios.post(url, channelName);
};

const { actions } = slice;
export { actions, addChannel };
export default slice.reducer;
