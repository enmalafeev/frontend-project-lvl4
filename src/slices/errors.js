/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { actions as messageActions } from './messages';
// import { actions as channelActions } from './channels';

const slice = createSlice({
  name: 'errors',
  initialState: {
    isError: false,
    error: '',
  },
  reducers: {
    clearErrors(state) {
      state.isError = false;
      state.error = '';
    },
  },
  extraReducers: {
    [messageActions.addMessageFailure](state, { payload }) {
      const { message } = payload;
      state.isError = true;
      state.error = message;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
