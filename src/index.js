// @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';
import React from 'react';
import ReactDOM from 'react-dom';

// import faker from 'faker';
import gon from 'gon';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';
import ChannelsList from './components/ChannelsList';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const getChannels = (gonChannels) => {
  const { channels } = gonChannels;
  return channels;
};

const App = () => (
  <ChannelsList channels={getChannels(gon)} />
);

const root = document.getElementById('chat');

ReactDOM.render(<App />, root);
