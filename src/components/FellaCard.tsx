import React from 'react';
import { Fella } from '../types';
import StreamingBar from './StreamingBar';

interface Props {
  fella: Fella;
}

const FellaCard: React.FC<Props> = ({ fella }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm mb-4">
      <h2 className="text-lg font-bold">{fella.name}</h2>
      <p>Level: {fella.level}</p>
      <StreamingBar streamed={fella.streamedAmount} />
    </div>
  );
};

export default FellaCard;
