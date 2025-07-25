import CustomerCard from "./CustomerCard";

export default function StageColumn({ stage, count, customers }) {
  return (
    <div className="col-md-3">
      
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="fw-bold">{stage}</h6>
        <span className="badge bg-light text-dark border rounded-pill">
          {count} ↕
        </span>
      </div>

      {customers.map((c, i) => (
        <CustomerCard key={i} {...c} />
      ))}
    </div>
  );
}
