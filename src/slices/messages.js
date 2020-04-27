import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';
import { actions as channelActions } from './channels';

const slice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessageSuccess: (state, action) => {
      const { data: { attributes } } = action.payload;
      state.push(attributes);
    },
  },
  extraReducers: {
    [channelActions.removeChannelSucces](state, { payload: { data: { id } } }) {
      return state.filter((message) => message.channelId !== id);
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
