import React from 'react';

export default function ChannelsList(props) {
  const { channels } = props;
  return (
    <ul>
    {
      channels.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))
    }
    </ul>
  )
};