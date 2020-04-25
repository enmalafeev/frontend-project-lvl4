/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'modals',
  initialState: {
    type: null,
  },
  reducers: {
    showModal(state, { payload }) {
      state.show = true;
      state.modalType = payload;
    },
    hideModal(state) {
      state.show = false;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
