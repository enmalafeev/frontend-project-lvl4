import { createSlice } from '@reduxjs/toolkit';

const currentChannel = createSlice({
  name: 'currentChannel',
  initialState: 1,
  reducers: {
    setActiveChannel: (state, action) => action.payload,
  },
});

export const { actions } = currentChannel;

export default currentChannel.reducer;
