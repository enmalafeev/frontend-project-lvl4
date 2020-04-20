import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

const slice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessageSuccess(state, action) {
      const { message } = action.payload;
      state.push(message);
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
