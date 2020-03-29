import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { actions } from '../features/channels/currentChannelSlice';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannel: state.currentChannel,
  };
  return props;
};

const actionCreators = {
  setActiveChannel: actions.setActiveChannel,
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
      'w-100': true,
      active: currentChannel === id,
    });
    return (
      <div className="col-3 border-right">
        <ul className="nav flex-column nav-pills nav-fill">
          {
            channels.map(({ id, name }) => (
              <li key={id}>
                <button
                  type="button"
                  className={activeClass(id)}
                  onClick={this.handleClick(id)}
                  onKeyDown={this.handleClick(id)}
                >
                  {name}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(ChannelsList);
