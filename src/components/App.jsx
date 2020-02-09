import React from 'react';
import ChannelsList from './ChannelsList';
import ChatArea from './ChatArea';

const App = (props) => {
  const { channels } = props;
  return (
    <div className="row">
      <ChannelsList channels={channels}/>
      <ChatArea />
    </div>
  )
};
export default App;