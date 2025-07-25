import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsPanel from "./components/StatsPanel";
import StageColumn from "./components/StageColumn";

function App() {
  const stages = {
    Contacted: [
      { title: "ByteBridge", desc: "Corporate and personal data protection on a turnkey basis", date: "18 Apr", comments: 2, files: 1 },
      { title: "AI Synergy", desc: "Innovative solutions based on artificial intelligence", date: "21 Mar", comments: 1, files: 3 },
      { title: "LeadBoost Agency", desc: "Lead attraction and automation for small businesses", date: "", comments: 4, files: 7 },
    ],
    Negotiation: [
      { title: "SkillUp Hub", desc: "Platform for professional development of specialists", date: "09 Mar", comments: 4, files: 1 },
      { title: "Thera Well", desc: "Platform for psychological support and consultations", date: "", comments: 7, files: 2 },
      { title: "SwiftCargo", desc: "International transportation of chemical goods", date: "23 Apr", comments: 2, files: 5 },
    ],
    "Offer Sent": [
      { title: "FitLife Nutrition", desc: "Nutritious food and nutraceuticals for individuals", date: "10 Mar", comments: 1, files: 3 },
      { title: "Prime Estate", desc: "Agency-developer of low-rise elite and commercial real estate", highlighted: true, address: "540 Realty Blvd, Miami, FL 33132", email: "contact@primeestate.com", manager: "Antony Cardenas", date: "16 Apr", comments: 1, files: 1 },
      { title: "NextGen University", desc: "Digital education services", date: "", comments: 0, files: 2 },
    ],
    "Deal Closed": [
      { title: "CloudSphere", desc: "Cloud services for data storage and processing", date: "24 Mar", comments: 2, files: 1 },
      { title: "Advantage Medi", desc: "Digital advertising and social media promotion", date: "05 Apr", comments: 1, files: 3 },
      { title: "Safebank Solutions", desc: "Innovative financial technologies and payments", date: "30 Mar", comments: 4, files: 7 },
    ],
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column bg-light">
        <Header />
        <StatsPanel />

        {/* Yahi code use hoga */}
        <div className="row p-3">
          {Object.entries(stages).map(([stage, customers], i) => (
            <StageColumn key={i} stage={stage} count={customers.length} customers={customers} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
