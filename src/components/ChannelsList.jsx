import React from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../slices';

const ChannelsList = () => {
  const channels = useSelector((state) => state.channels.channels);
  const currentChannel = useSelector((state) => state.currentChannel.id);

  const dispatch = useDispatch();

  const handleClick = (id) => (e) => {
    e.preventDefault();
    dispatch(actions.setActiveChannel(id));
  };

  const handleShowModal = (type, channel = null) => (e) => {
    e.preventDefault();
    dispatch(actions.showModal({ type, channel }));
  };

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
          onClick={handleShowModal('addChannel')}
        >
          +
        </button>
      </div>
      <ul className="nav flex-column nav-pills nav-fill">
        {
          channels.map((channel) => {
            if (channel.removable) {
              return (
                <li key={channel.id} className="d-inline-flex">
                  <button
                    type="button"
                    className={activeClass(channel.id)}
                    onClick={handleClick(channel.id)}
                    onKeyDown={handleClick(channel.id)}
                  >
                    {channel.name}
                  </button>
                  <button type="button" onClick={handleShowModal('renameChannel', channel)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button type="button" onClick={handleShowModal('removeChannel', channel)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              );
            }
            return (
              <li key={channel.id} className="d-inline-flex">
                <button
                  type="button"
                  className={activeClass(channel.id)}
                  onClick={handleClick(channel.id)}
                  onKeyDown={handleClick(channel.id)}
                >
                  {channel.name}
                </button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default ChannelsList;
