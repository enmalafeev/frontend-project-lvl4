/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'modals',
  initialState: {
    type: null,
    item: null,
  },
  reducers: {
    showModal(state, { payload }) {
      state.type = payload.type;
      state.item = payload.channel;
    },
    hideModal(state) {
      state.type = null;
      state.item = null;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
