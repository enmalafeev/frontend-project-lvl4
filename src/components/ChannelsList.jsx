import React from 'react';
import { connect } from 'react-redux';
import { setActiveChannel } from '../features/channels/currentChannelSlice';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    // currentChannelId: state.currentChannelId,
  };
  return props;
};

const actionCreators = {
  setActiveChannel: setActiveChannel,
};

class ChannelsList extends React.Component {
  handleClick = (id) => (e) => {
    e.preventDefault();
    const { setActiveChannel } = this.props;
    setActiveChannel(id);
  }
  render() {
    const { channels } = this.props;
    return (
      <ul className="list-group col-3">
        {
          channels.map(({ id, name }) => (
            <li
              className="list-group-item"
              key={id}
              onClick={this.handleClick(id)}
            >
              {name}
            </li>
          ))
        }
      </ul>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(ChannelsList);
