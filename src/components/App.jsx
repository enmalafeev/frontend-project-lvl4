import React from 'react';
import { connect } from 'react-redux';
import ChannelsList from './ChannelsList';
import ChatArea from './ChatArea';
import getModal from './modals/index.js';
import { actions, asyncActions } from '../slices';


const mapStateToProps = (state) => {
  const props = {
    modalData: state.modals,
  };
  return props;
};

const actionCreators = {
  addChannel: asyncActions.addChannel,
  removeChannel: asyncActions.removeChannel,
  hideModal: actions.hideModal,
};

const renderModal = ({ modalData, modalProps, hideModal }) => {
  if (!modalData.type) {
    return null;
  }
  const SpecialModal = getModal(modalData.type);
  return <SpecialModal modalProps={modalProps} onHide={hideModal} />;
};

const App = (props) => {
  const {
    channels,
    modalData,
    hideModal,
    addChannel,
    removeChannel,
  } = props;

  const modalProps = {
    modalData,
    addChannel,
    removeChannel,
  };
  return (
    <div className="row h-100 pb-3">
      <ChannelsList channels={channels} />
      <ChatArea />
      {renderModal({ modalData, hideModal, modalProps })}
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(App);
