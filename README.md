# BitFS Chrome Extension

Browser extension for the BitFS decentralized encrypted file system.
MetaMask-model: crypto runs locally, data from public network.

## Prerequisites
- Node.js >= 20
- npm >= 10

## Getting Started
1. npm install
2. npm run build
3. Load `dist/` as unpacked extension in Chrome

## Project Structure
- `src/popup/` — React popup UI
- `src/background/` — Service worker (key management)
- `src/content-script/` — Page integration (bitfs:// links)
- `src/bitfs-core/` — TypeScript BitFS crypto (Method 42, wallet, x402)
- `public/` — Static assets (manifest, icons)
