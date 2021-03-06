import { combineReducers } from 'redux';

import modals, { actions as modalsActions } from './modals';
import messages, { actions as messagesActions, addMessage } from './messages';
import channels, { actions as channelsActions, asyncActions as asyncChannelActions } from './channels';
import currentChannel, { actions as currentChannelActions } from './currentChannel';
import errors, { actions as errorActions } from './errors';


const actions = {
  ...modalsActions,
  ...messagesActions,
  ...channelsActions,
  ...errorActions,
  ...currentChannelActions,
};

const asyncActions = {
  addMessage,
  asyncChannelActions,
};

export { actions, asyncActions };

export default combineReducers({
  modals,
  messages,
  channels,
  errors,
  currentChannel,
});
