/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import modals from '../components/modals';

const slice = createSlice({
  name: modals,
  initialState: {
    showAdd: false,
  },
  reducers: {
    showAddModal(state) {
      state.showAdd = true;
    },
    hideAddModal(state) {
      state.showAdd = false;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
