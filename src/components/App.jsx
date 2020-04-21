import React from 'react';
import { connect } from 'react-redux';
import ChannelsList from './ChannelsList';
import ChatArea from './ChatArea';
import getModal from './modals/index.js';
import { actions } from '../slices';


const mapStateToProps = (state) => {
  const props = {
    show: state.modals.showAdd,
  };
  return props;
};

const actionCreators = {
  hideAdd: actions.hideAddModal,
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
  const { channels, show, hideAdd } = props;
  const handleHideModal = () => {
    hideAdd();
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
