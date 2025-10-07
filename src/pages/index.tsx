import React, { useState } from 'react';
import { WagmiConfig } from 'wagmi';
import { ReownProvider, useReown } from '@reown/appkit';
import { wagmiConfig } from '../lib/wagmi';
import FellaCard from '../components/FellaCard';
import SubscriptionList from '../components/SubscriptionList';
import { Fella, Subscription } from '../types';

const mockFellas: Fella[] = [
  { id: 'f1', name: 'Oddball', level: 3, streamedAmount: 250 },
  { id: 'f2', name: 'Whimsic', level: 2, streamedAmount: 120 }
];

const mockSubscriptions: Subscription[] = [
  { id: 's1', fellaId: 'f1', subscriber: '0xabc', amountPerSecond: 0.01, active: true },
  { id: 's2', fellaId: 'f2', subscriber: '0xdef', amountPerSecond: 0.02, active: false }
];

const Home: React.FC = () => {
  const { connect, disconnect, account } = useReown();
  const [fellas] = useState<Fella[]>(mockFellas);
  const [subscriptions] = useState<Subscription[]>(mockSubscriptions);

  return (
    <WagmiConfig config={wagmiConfig}>
      <ReownProvider projectId="180a7164cfa9e5388daf1160841f65a0">
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Fairly Odd Fellas – StreamPay</h1>

          {account ? (
            <div className="mb-6">
              <p>Connected: {account.address}</p>
              <button onClick={disconnect} className="bg-red-500 text-white px-4 py-2 rounded">Disconnect</button>
            </div>
          ) : (
            <button onClick={connect} className="bg-blue-500 text-white px-4 py-2 rounded mb-6">Connect Wallet</button>
          )}

          <h2 className="text-xl font-semibold mb-2">Fellas</h2>
          {fellas.map((f) => <FellaCard key={f.id} fella={f} />)}

          <h2 className="text-xl font-semibold mt-6 mb-2">Subscriptions</h2>
          <SubscriptionList subscriptions={subscriptions} />
        </div>
      </ReownProvider>
    </WagmiConfig>
  );
};

export default Home;
