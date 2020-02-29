import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

const channels = createReducer([], {});

const messages = createReducer({ byId: {}, allIds: [] }, {
  [actions.addMessageSuccess]: (state, action) => {
    const { byId, allIds } = state;
    const { data: { id, attributes } } = action.payload;
    return {
      byId: { ...byId, [id]: attributes },
      allIds: [id, ...allIds],
    }
  
  },
});

export default combineReducers({
  channels,
  messages,
});
