/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { actions as channelActions } from './channels';

const slice = createSlice({
  name: 'currentChannel',
  initialState: {
    id: 1,
  },
  reducers: {
    initCurrentChannelId(state, { payload }) {
      state.id = payload;
    },
    setActiveChannel: (state, { payload }) => {
      state.id = payload;
    },
  },
  extraReducers: {
    [channelActions.removeChannelSuccess](state) {
      state.id = 1;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
