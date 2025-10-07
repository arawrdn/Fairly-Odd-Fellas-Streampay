# Fairly Odd Fellas – StreamPay

Fairly Odd Fellas – StreamPay is a Web3 platform for streaming token payments with a gamified experience. Connect wallets, subscribe to your favorite Fellas, and stream micro-payments with rewards.

---

## 🚀 Features
- Wallet authentication via Reown AppKit
- Streaming token payments to Fellas
- Multi-chain support via Wagmi (Ethereum, Polygon, Base)
- Gamified dashboard: progress bars, levels, NFT rewards
- Interactive UI for managing subscriptions and streaming

---

## 📦 Setup & Usage

```bash
git clone https://github.com/arawrdn/fairly-odd-fellas-streampay.git
cd fairly-odd-fellas-streampay

npm install
npm install @reown/appkit@^1.1.2 @reown/appkit-adapter-wagmi@^1.1.2 wagmi viem

echo "NEXT_PUBLIC_REOWN_PROJECT_ID=180a7164cfa9e5388daf1160841f65a0" > .env.local
echo "NEXT_PUBLIC_DEFAULT_CHAIN_ID=1" >> .env.local

npm run dev
open http://localhost:3000 in a browser
