import { FaSort, FaFilter, FaUser, FaPlus, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: '#f7f7f0' }}>
      
      
      <div className="input-group" style={{ maxWidth: "300px" }}>
        <span className="input-group-text bg-light border-0">
          <FaSearch />
        </span>
        <input type="text" className="form-control border-0 bg-light" placeholder="Search customer..." />
      </div>

    
      <div className="d-flex align-items-center">
        <button className="btn btn-light border-0 me-2"><FaSort /> Sort by</button>
        <button className="btn btn-light border-0 me-2"><FaFilter /> Filters</button>
        <button className="btn btn-light border-0 me-2"><FaUser /> Me</button>
        <button className="btn btn-dark text-white px-3">
          <FaPlus /> Add customer
        </button>
      </div>
    </div>
  );
}
