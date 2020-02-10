import React from 'react';
import InputMessage from './InputMessage';

const ChatArea = () => (
  <div className="ChatArea col-9">
    <ul className="MessageList"></ul>
    <InputMessage />
  </div>
);

export default ChatArea;
