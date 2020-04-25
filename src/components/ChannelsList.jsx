import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { actions } from '../slices';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannel: state.currentChannel,
  };
  return props;
};

const actionCreators = {
  setActiveChannel: actions.setActiveChannel,
  showModal: actions.showModal,
};

class ChannelsList extends React.Component {
  handleClick = (id) => (e) => {
    e.preventDefault();
    const { setActiveChannel } = this.props;
    setActiveChannel(id);
  }

  handleShowModal = (type) => (e) => {
    e.preventDefault();
    const { showModal } = this.props;
    showModal(type);
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
        <div className="d-flex mb-2">
          <span>Channels</span>
          <button
            type="button"
            className="btn btn-link p-0 ml-auto"
            onClick={this.handleShowModal('addChannel')}
          >
            +
          </button>
        </div>
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
