// HD Wallet for BitFS
// Go counterpart: libbitfs/wallet/
//
// BIP44 path: m/44'/236'/account'/chain/index
// CoinType 236 = BitFS
//
// Dependencies:
//   @scure/bip32 — HD key derivation
//   @scure/bip39 — Mnemonic generation

// TODO: implement generateMnemonic() -> string
// TODO: implement mnemonicToSeed(mnemonic, passphrase?) -> Uint8Array
// TODO: implement deriveKey(seed, path) -> { privateKey, publicKey }

export {};
