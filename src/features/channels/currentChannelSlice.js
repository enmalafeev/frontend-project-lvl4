import { createSlice } from '@reduxjs/toolkit';

const currentChannel = createSlice({
  name: 'currentChannel',
  initialState: 1,
  reducers: {
    setActiveChannel: (state, action) => {
      return state = action.payload;
    },
  }
});

export const { setActiveChannel } = currentChannel.actions;

export default currentChannel.reducer;