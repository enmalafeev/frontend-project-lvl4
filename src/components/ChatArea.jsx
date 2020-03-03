import React from 'react';
import InputMessage from './InputMessage';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const props = {
    messages: state.messages,
  }
  return props;
}

class ChatArea extends React.Component {
  render() {
    const { messages } = this.props;
    const renderMessages = () => (
      <ul className="h-100 list-group">
        {
          messages.map(({ id, userMessage }) => (
          <li className="list-group-item" key={id}>{userMessage}</li>))
        }
      </ul>
    );
    console.log(messages);
    return (
      <div className="ChatArea col-9">
        {renderMessages()}
        <InputMessage />
      </div>
    )
  };
};

export default connect(mapStateToProps)(ChatArea);
