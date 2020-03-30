import AddChannel from './AddChannel.jsx';

const modals = {
  'addChannel': AddChannel,
  'renameChannel': RanameChannel,
  'deleteChannel': DeleteChannel, 
};

export default (modalName) => modals[modalName];
