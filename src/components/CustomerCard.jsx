export default function CustomerCard({ title, desc, date, comments, files, highlighted, address, email, manager }) {
  return (
    <div className={`card p-3 mb-3 shadow-sm border-0 ${highlighted ? "bg-dark text-white" : "bg-white"}`}>
      <h6 className="fw-bold">{title}</h6>
      <p className={`small ${highlighted ? "text-light" : "text-muted"}`}>{desc}</p>

      
      {highlighted && (
        <div className="small mb-2">
          <p className="mb-1">{address}</p>
          <p className="mb-1">{email}</p>
          <p className="mb-1">Manager: {manager}</p>
        </div>
      )}

      <div className="d-flex justify-content-between align-items-center small">
        <span>{date || "No due date"}</span>
        <span>💬 {comments} 📂 {files}</span>
      </div>
    </div>
  );
}
