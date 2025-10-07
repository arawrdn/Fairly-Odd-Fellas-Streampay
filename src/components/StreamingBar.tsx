import React from 'react';

interface Props {
  streamed: number;
}

const StreamingBar: React.FC<Props> = ({ streamed }) => {
  const width = Math.min(100, (streamed / 1000) * 100);
  return (
    <div className="w-full bg-gray-200 h-4 rounded">
      <div className="bg-green-500 h-4 rounded" style={{ width: `${width}%` }} />
    </div>
  );
};

export default StreamingBar;
