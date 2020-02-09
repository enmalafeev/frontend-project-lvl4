import React from 'react';

export default function ChannelsList(props) {
  const { channels } = props;
  return (
    <ul className="list-group">
      {
        channels.map(({ id, name }) => (
          <li className="list-group-item" key={id}>{name}</li>
        ))
      }
    </ul>
  );
}
