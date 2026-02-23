// Core BitFS types — TypeScript equivalents of Go types in libbitfs

/** Access mode for content */
export enum AccessMode {
  Private = 0, // Owner-only access
  Free = 1,    // Public access (encrypted with trivial key)
  Paid = 2,    // Pay-per-access via x402/HTLC
}

/** MetaFlag constant: "meta" in ASCII */
export const META_FLAG = 0x6d657461;

/** Dust limit for P2PKH outputs */
export const DUST_LIMIT = 546;

// TODO: add MetanetNode, ChildEntry, Transaction types
// Reference: libbitfs/metanet/types.go
