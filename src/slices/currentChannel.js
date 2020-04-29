/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { actions as channelActions } from './channels';

const slice = createSlice({
  name: 'currentChannel',
  initialState: 1,
  reducers: {
    setActiveChannel: (state, action) => action.payload,
  },
  extraReducers: {
    [channelActions.removeChannelSuccess]() {
      return 1;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
