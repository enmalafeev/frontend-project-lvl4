import { connect } from 'react-redux';
import React from 'react';
import InputMessage from './InputMessage';

const mapStateToProps = (state) => {
  const props = {
    messages: state.messages,
  };
  return props;
};

const renderMessages = (messages) => (
  <ul className="h-100 list-group">
    {
      messages.map(({ id, userMessage }) => (
        <li className="list-group-item" key={id}>{userMessage}</li>))
    }
  </ul>
);

const ChatArea = ({ messages }) => (
  <div className="ChatArea col-9">
    {renderMessages(messages)}
    <InputMessage />
  </div>
);

export default connect(mapStateToProps)(ChatArea);
