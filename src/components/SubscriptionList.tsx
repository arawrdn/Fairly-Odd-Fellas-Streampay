import React from 'react';
import { Subscription } from '../types';

interface Props {
  subscriptions: Subscription[];
}

const SubscriptionList: React.FC<Props> = ({ subscriptions }) => {
  return (
    <ul>
      {subscriptions.map((sub) => (
        <li key={sub.id} className={`p-2 ${!sub.active ? 'text-gray-400' : ''}`}>
          Subscriber: {sub.subscriber} | Amount/sec: {sub.amountPerSecond} | {sub.active ? 'Active' : 'Inactive'}
        </li>
      ))}
    </ul>
  );
};

export default SubscriptionList;
