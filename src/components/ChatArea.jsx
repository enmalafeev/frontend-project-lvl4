import React, { useContext } from 'react';
import { connect } from 'react-redux';
import InputMessage from './InputMessage';
import { UserNameContext } from '../Context';

const mapStateToProps = (state) => {
  const props = {
    messages: state.messages,
  };
  return props;
};

const RenderMessages = ({ messages }) => {
  const userName = useContext(UserNameContext);
  return (
    <ul className="h-100 list-group border border-dark mb-3">
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
  <div className="ChatArea col-9">
    <RenderMessages messages={messages} />
    <InputMessage />
  </div>
);

export default connect(mapStateToProps)(ChatArea);
