import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import currentChannel from '../features/channels/currentChannelSlice';
import * as actions from '../actions';

const channels = createReducer([], {});
// const currentChannelId = createReducer(1, {});

const messages = createReducer([], {
  [actions.socketMessageRecieved]: (state, action) => {
    const { data: { attributes } } = action.payload;
    state.push(attributes);
  },
});


export default combineReducers({
  currentChannel,
  channels,
  messages,
});
