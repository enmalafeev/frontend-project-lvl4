/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'currentChannel',
  initialState: 1,
  reducers: {
    setActiveChannel: (state, action) => action.payload,
  },
});

export const { actions } = slice;
export default slice.reducer;
