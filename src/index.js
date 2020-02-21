// @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';
import React from 'react';
import { render } from 'react-dom';

import faker from 'faker';
import gon from 'gon';
import cookies from 'js-cookie';
// import io from 'socket.io-client';
import App from './components/App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers';


if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const getChannels = (gonChannels) => {
  const { channels } = gonChannels;
  return channels;
};

const generateRandomName = faker.name.findName();

cookies.set('userName', generateRandomName);
const userName = cookies.get('userName');

const store = configureStore({
  reducer: rootReducer,
})

const root = document.getElementById('chat');

render(
  <Provider store={store}>
    <App channels={getChannels(gon)}/>
  </Provider>,
  root);
