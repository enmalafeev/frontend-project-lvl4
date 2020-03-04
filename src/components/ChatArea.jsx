import { connect } from 'react-redux';
import React from 'react';
import InputMessage from './InputMessage';
import { UserNameContext } from '../index';

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
        <UserNameContext.Consumer>
          {
            (userName) => (
              <li className="list-group-item" key={id}>
                <h6 className="font-weight-bold">
                  {userName}
                </h6>
                {userMessage}
              </li>
            )
          }
        </UserNameContext.Consumer>
      ))
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
