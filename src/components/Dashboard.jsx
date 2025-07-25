import CustomerCard from "./CustomerCard";

export default function Dashboard() {
  const stages = {
    "Contacted": [
      { title: "ByteBridge", desc: "Corporate data protection", date: "18 Apr", comments: 2, files: 1 },
      { title: "AI Synergy", desc: "AI-based solutions", date: "21 Mar", comments: 1, files: 3 },
    ],
    "Negotiation": [
      { title: "SkillUp Hub", desc: "Platform for dev specialists", date: "09 Mar", comments: 4, files: 1 },
    ],
    "Offer Sent": [
      { title: "FitLife Nutrition", desc: "Nutritious food services", date: "10 Mar", comments: 1, files: 3 },
    ],
    "Deal Closed": [
      { title: "CloudSphere", desc: "Cloud storage services", date: "24 Mar", comments: 2, files: 1 },
    ],
  };

  return (
    <div className="p-3">
      <div className="row">
        {Object.entries(stages).map(([stage, cards], idx) => (
          <div className="col-md-3" key={idx}>
            <h5>{stage}</h5>
            {cards.map((card, i) => (
              <CustomerCard key={i} {...card} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
