import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'channels',
  initialState: [],
  reducers: {
    addChannel(state, action) {
      const { channelName } = action.payload;
      state.push(channelName);
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
