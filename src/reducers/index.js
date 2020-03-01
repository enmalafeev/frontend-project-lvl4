import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

const channels = createReducer([], {});

const messages = createReducer([], {
  [actions.addMessageSuccess]: (state, action) => {
    const { data: { attributes } } = action.payload;
    state.push(attributes);
  },
});

export default combineReducers({
  channels,
  messages,
});
