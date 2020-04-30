import React from 'react';
import { render } from 'react-dom';

import '../assets/application.scss';

import faker from 'faker';
import gon from 'gon';
import cookies from 'js-cookie';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import App from './components/App';
import { UserNameProvider } from './Context';
import reducer, { actions } from './slices';

export default () => {
  const { channels, messages } = gon;
  console.log(gon);

  const store = configureStore({
    reducer,
  });

  store.dispatch(actions.initChannels(channels));
  store.dispatch(actions.initMessages(messages));

  const userName = faker.name.findName();
  const getName = () => cookies.get('user');
  if (!getName()) {
    cookies.set('user', userName);
  }

  const socket = io();

  socket.on('newMessage', (message) => store.dispatch(actions.addMessageSuccess(message)));
  socket.on('newChannel', (name) => store.dispatch(actions.addChannelSuccess(name)));
  socket.on('removeChannel', (id) => store.dispatch(actions.removeChannelSuccess(id)));
  socket.on('renameChannel', (id) => store.dispatch(actions.renameChannelSuccess(id)));


  const root = document.getElementById('chat');

  render(
    <Provider store={store}>
      <UserNameProvider value={getName()}>
        <App channels={channels} />
      </UserNameProvider>
    </Provider>,
    root,
  );
};
