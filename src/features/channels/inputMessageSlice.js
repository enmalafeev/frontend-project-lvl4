import { createSlice } from '@reduxjs/toolkit';

const inputMessageSlice = createSlice({
  name: 'inputMessage',
  initialState: '',
  reducers: {
    addMessage(state, action) {
      const { message } = action.payload;
      state.push({ message });
    },
  },
});

export const { addMessage } = inputMessageSlice.actions;

export default inputMessageSlice;
