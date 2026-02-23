// BitFS Extension Service Worker
// Handles key management, transaction signing, and message routing

chrome.runtime.onInstalled.addListener(() => {
  console.log("BitFS extension installed");
  // TODO: initialize wallet storage
});

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  // TODO: handle messages from popup and content script
  // Message types: SIGN_TX, GET_ADDRESS, DECRYPT_CONTENT, PAY_INVOICE
  console.log("Message received:", message.type);
  sendResponse({ status: "not_implemented" });
  return true; // async response
});
