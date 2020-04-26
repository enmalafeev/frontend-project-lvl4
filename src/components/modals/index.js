import Add from './Add.jsx';
import Rename from './Rename.jsx';
import Remove from './Remove.jsx';

const modals = {
  addChannel: Add,
  renameChannel: Rename,
  removeChannel: Remove,
};

export default (modalName) => modals[modalName];
