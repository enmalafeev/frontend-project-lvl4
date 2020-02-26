import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

const messages = createReducer([], {
  [actions.addMessageSuccess]: (state, action) => {
    const newMessage = action.payload;
    state.push(newMessage);
  },
});

export default combineReducers({
  messages,
});
