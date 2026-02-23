# BitFS Chrome Extension

MetaMask-model browser extension for BitFS. Pure TypeScript crypto, no WASM.

## Build & Test
npm run build      # Production build to dist/
npm run dev        # Watch mode for development
npm test           # Run vitest

## Architecture
- Popup: React SPA (wallet UI, settings)
- Background: Service worker (key management, signing)
- Content Script: bitfs:// link detection and interception
- Crypto: @noble/secp256k1 + @noble/hashes (pure JS, ~200KB bundle)

## Loading in Chrome
1. npm run build
2. chrome://extensions → Developer mode → Load unpacked → select dist/

## Key Design Decisions
- All crypto runs locally in the extension (MetaMask model)
- No WASM dependencies — pure JavaScript crypto libraries
- Data fetched from BSV public APIs or any BitFS daemon node
- Method 42 ECDH key derivation matches Go implementation in libbitfs
