import { combineReducers } from 'redux';

import modals, { actions as modalsActions } from './modals';
import messages, { actions as messagesActions, addMessage } from './messages';
import currentChannel, { actions as currentChannelActions } from './currentChannel';


const actions = {
  ...modalsActions,
  ...messagesActions,
  ...currentChannelActions,
};

const asyncActions = {
  addMessage,
};

export { actions, asyncActions };

export default combineReducers({
  modals,
  messages,
  currentChannel,
});
