// x402 Payment Protocol
// Go counterpart: libbitfs/x402/
//
// HTTP 402-based content payment protocol
// Flow: GET -> 402 + invoice -> pay -> GET with proof -> 200 + content
//
// Invoice contains: amount, address, contentHash, expiry

// TODO: implement parseInvoice(header: string) -> Invoice
// TODO: implement createPayment(invoice, privateKey) -> Payment
// TODO: implement verifyPayment(payment) -> boolean

export {};
