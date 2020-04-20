import React from 'react';
import { connect } from 'react-redux';
import ChannelsList from './ChannelsList';
import ChatArea from './ChatArea';
import getModal from './modals/index.js';
// import { hideModal } from '../actions';


const mapStateToProps = (state) => {
  const props = {
    show: state.modals.showAdd,
  };
  return props;
};

const actionCreators = {
  // hideAddModal: hideModal,
};

const AddChannelModal = (props) => {
  const add = getModal('addChannel');
  return (
    <>
      {add(props)}
    </>
  );
};

const App = (props) => {
  const { channels, show, hideAddModal } = props;
  const handleHideModal = () => {
    // hideAddModal();
  };
  return (
    <div className="row h-100 pb-3">
      <ChannelsList channels={channels} />
      <ChatArea />
      <AddChannelModal show={show} onHide={handleHideModal} />
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(App);
