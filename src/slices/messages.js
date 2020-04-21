import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

const slice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessageSuccess: (state, action) => {
      const { data: { attributes } } = action.payload;
      state.push(attributes);
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
