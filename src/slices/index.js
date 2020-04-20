import { combineReducers } from 'redux';

import modals, { actions as modalsActions } from './modals';


export const actions = {
  ...modalsActions,
};

export default combineReducers({
  modals,
});
