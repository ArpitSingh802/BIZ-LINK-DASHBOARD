import { FaTachometerAlt, FaTasks, FaChartLine, FaUsers, FaCog, FaBolt, FaChartArea, FaProjectDiagram } from "react-icons/fa";

export default function Sidebar() {
  const members = [
    { name: "Sandra Perry", role: "Product Manager", img: "https://randomuser.me/api/portraits/women/44.jpg", active: true },
    { name: "Antony Cardenas", role: "Sales Manager", img: "https://randomuser.me/api/portraits/men/32.jpg", active: true },
    { name: "Jamal Connolly", role: "Growth Marketer", img: "https://randomuser.me/api/portraits/men/45.jpg", active: false },
    { name: "Cara Carr", role: "SEO Specialist", img: "https://randomuser.me/api/portraits/women/55.jpg", active: true },
    { name: "Iona Rollins", role: "", img: "https://randomuser.me/api/portraits/women/65.jpg", active: false },
  ];

  return (
    <div className="d-flex flex-column justify-content-between bg-white p-3 vh-100 border-end" style={{ width: "250px" }}>
      <div>
        <h5 className="fw-bold mb-4">BizLink</h5>
        <ul className="nav flex-column gap-2 mb-4">
          <li className="nav-item text-muted"><FaTachometerAlt /> Dashboard</li>
          <li className="nav-item d-flex justify-content-between align-items-center">
            <span><FaTasks /> Tasks</span>
            <span className="badge bg-secondary rounded-pill">2</span>
          </li>
          <li className="nav-item text-muted"><FaChartLine /> Activity</li>
          <li className="nav-item bg-light rounded p-1 fw-bold text-dark"><FaUsers /> Customers</li>
          <li className="nav-item text-muted"><FaCog /> Settings</li>
        </ul>

        <p className="text-muted small mb-2">Projects</p>
        <ul className="nav flex-column gap-2 mb-4">
          <li className="nav-item d-flex justify-content-between align-items-center">
            <span><FaBolt /> BizConnect</span>
            <span className="badge bg-light text-dark border rounded-pill">7</span>
          </li>
          <li className="nav-item text-muted"><FaChartArea /> Growth Hub</li>
          <li className="nav-item text-muted"><FaProjectDiagram /> Conversion Path</li>
          <li className="nav-item text-muted"><FaProjectDiagram /> Marketing</li>
        </ul>

        <p className="text-muted small mb-2">Members</p>
        <div>
          {members.slice(0, 4).map((m, idx) => (
            <div className="d-flex align-items-center gap-2 mb-2" key={idx}>
              <img src={m.img} alt={m.name} className="rounded-circle" width="32" height="32" />
              <div>
                <div className="small fw-bold">{m.name}</div>
                <div className="text-muted small">{m.role}</div>
              </div>
              {m.active && <span className="ms-auto bg-success rounded-circle" style={{ width: '8px', height: '8px' }}></span>}
            </div>
          ))}
          <div className="d-flex align-items-center gap-2 mt-2">
            <img src={members[4].img} alt="Iona Rollins" className="rounded-circle" width="32" height="32" />
            <div>
              <div className="small fw-bold">Iona Rollins</div>
            </div>
            <span className="ms-auto text-muted">⇄</span>
          </div>
        </div>
      </div>
    </div>
  );
}
