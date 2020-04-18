import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import currentChannel from '../features/channels/currentChannelSlice';
import * as actions from '../actions';

const channels = createReducer([], {});

const messages = createReducer([], {
  [actions.socketMessageRecieved]: (state, action) => {
    const { data: { attributes } } = action.payload;
    state.push(attributes);
  },
});

const modals = createReducer(false, {
  [actions.showModal]: (state) => !state.modals,
});


export default combineReducers({
  currentChannel,
  channels,
  messages,
  modals,
});
