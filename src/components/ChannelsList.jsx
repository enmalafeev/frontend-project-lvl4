import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { setActiveChannel } from '../features/channels/currentChannelSlice';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannel: state.currentChannel,
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
    const { channels, currentChannel } = this.props;
    const activeClass = (id) => cn({
      'list-group-item': true,
      'active': currentChannel === id,
    });
    return (
      <ul className="list-group col-3">
        {
          channels.map(({ id, name }) => (
            <li
              className={activeClass(id)}
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
