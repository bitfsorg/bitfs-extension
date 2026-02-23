export function Home() {
  return (
    <div style={{ padding: 16 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>BitFS</h1>
      <p style={{ color: "#666" }}>Decentralized Encrypted File System</p>
      <div
        style={{
          marginTop: 16,
          padding: "8px 12px",
          borderRadius: 6,
          backgroundColor: "#f5f5f5",
        }}
      >
        <span style={{ color: "#999" }}>Status:</span>{" "}
        <span style={{ color: "#e67e22" }}>Not connected</span>
      </div>
    </div>
  );
}
