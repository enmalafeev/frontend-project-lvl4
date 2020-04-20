import { combineReducers } from 'redux';

import messages, { actions as messagesActions, addMessage } from './messages';
import modals, { actions as modalsActions } from './modals';


const actions = {
  ...messagesActions,
  ...modalsActions,
};

const asyncActions = {
  addMessage,
};

export { actions, asyncActions };

export default combineReducers({
  messages,
  modals,
});
