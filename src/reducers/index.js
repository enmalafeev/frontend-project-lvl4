import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const inputMessageState = handleActions({
  [actions.addMessageSuccess](state, { payload: { newMessage } }) {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [newMessage.id]: newMessage },
      allIds: [newMessage.id, ...allIds]
    }
  }
},{ byId: {}, allIds: [] });

export default combineReducers({
  inputMessageState,
});
