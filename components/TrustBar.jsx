export default function TrustBar() {
  return (
    <div className="container-tight py-6">
      <div className="trust-wrap">
        <div className="trust-chip">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/></svg>
          <span>CE</span>
        </div>
        <div className="trust-chip">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 3 9l9 13 9-13-9-7Z" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>
          <span>BIS</span>
        </div>
        <div className="trust-chip">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19h14l-2-10H7L5 19Z" stroke="currentColor" strokeWidth="1.6" fill="none"/><path d="M9 9V6h6v3" stroke="currentColor" strokeWidth="1.6"/></svg>
          <span>ISO 9001:2015</span>
        </div>
      </div>
    </div>
  );
}
