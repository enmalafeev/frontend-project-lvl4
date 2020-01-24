// @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import ChannelsList from './components/ChannelsList';

// import faker from 'faker';
import gon from 'gon';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const getChannels = (gon) => {
  const channels = gon.channels;
  return channels;
}

console.log(getChannels(gon));

class App extends React.Component {
  render() {
    return (
      <ChannelsList channels={getChannels(gon)}/>
    )
  }
}

const root = document.getElementById('chat');

ReactDOM.render(<App />, root);

console.log('it works!');
console.log('gon', gon);