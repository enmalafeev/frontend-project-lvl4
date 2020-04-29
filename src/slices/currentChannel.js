import { createSlice } from '@reduxjs/toolkit';
import { actions as channelActions } from './channels';

const slice = createSlice({
  name: 'currentChannel',
  initialState: 1,
  reducers: {
    setActiveChannel: (state, action) => action.payload,
  },
  extraReducers: {
    [channelActions.removeChannelSuccess](state) {
      return state = 1;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
