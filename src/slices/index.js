import { combineReducers } from 'redux';

import modals, { actions as modalsActions } from './modals';
import messages, { actions as messagesActions, addMessage } from './messages';
import channels, { actions as channelsActions, addChannel } from './channels';
import currentChannel, { actions as currentChannelActions } from './currentChannel';


const actions = {
  ...modalsActions,
  ...messagesActions,
  ...channelsActions,
  ...currentChannelActions,
};

const asyncActions = {
  addMessage,
  addChannel,
};

export { actions, asyncActions };

export default combineReducers({
  modals,
  messages,
  channels,
  currentChannel,
});
