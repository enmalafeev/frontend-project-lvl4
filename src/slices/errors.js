/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'errors',
  initialState: {
    isError: false,
    error: '',
  },
  reducers: {
    addError(state, { payload }) {
      const { message } = payload;
      state.isError = true;
      state.error = message;
    },
    clearErrors(state) {
      state.isError = false;
      state.error = '';
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
