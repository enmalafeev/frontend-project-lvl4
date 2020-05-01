import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import InputMessage from './InputMessage';
import { UserNameContext } from '../Context';

const selectMessages = (state) => state.messages.messages;
const selectFilter = (state) => state.currentChannel.id;

const showChannelMessages = createSelector(
  [selectMessages, selectFilter],
  (messages, currentChannel) => messages.filter(({ channelId }) => channelId === currentChannel),
);

const mapStateToProps = (state) => ({
  messages: showChannelMessages(state),
});

const RenderMessages = ({ messages }) => {
  const userName = useContext(UserNameContext);
  return (
    <ul id="messages-box" className="chat-messages overflow-auto mb-3 p-0">
      {
        messages.map(({ id, userMessage }) => (
          <li className="list-group-item border-0" key={id}>
            <h6 className="font-weight-bold">
              {userName}
            </h6>
            {userMessage}
          </li>
        ))
      }
    </ul>
  );
};

const ChatArea = ({ messages }) => (
  <div className="col h-100">
    <div className="d-flex flex-column h-100">
      <RenderMessages messages={messages} />
      <InputMessage />
    </div>
  </div>
);

export default connect(mapStateToProps)(ChatArea);
