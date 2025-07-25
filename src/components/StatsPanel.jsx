import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';

export default function StatsPanel() {
  const data = [
    { day: 'Mon', current: 7, previous: 4 },
    { day: 'Tue', current: 10, previous: 6 },
    { day: 'Wed', current: 8, previous: 4 },
    { day: 'Thu', current: 4, previous: 2 },
    { day: 'Fri', current: 9, previous: 6 },
  ];

  return (
    <div className="p-4 rounded" style={{ backgroundColor: '#f7f7f0' }}>
      <div className="row align-items-center">
        
        {/* Left: Bar Chart */}
        <div className="col-md-4" style={{ height: 200 }}>
          <h6 className="fw-semibold mb-3">New customers</h6>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <YAxis hide />
              <Bar dataKey="previous" fill="url(#patternStripes)" />
              <Bar dataKey="current" fill="#000" />
              <defs>
                <pattern id="patternStripes" patternUnits="userSpaceOnUse" width="4" height="4">
                  <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="#ccc" strokeWidth="1" />
                </pattern>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Center: Gauge */}
        <div className="col-md-4 text-center">
          <svg viewBox="0 0 100 50" className="w-75">
            <path d="M5 50 A45 45 0 0 1 95 50" fill="none" stroke="#e5e5e5" strokeWidth="8" />
            <path d="M5 50 A45 45 0 0 1 72 14" fill="none" stroke="#000" strokeWidth="8" />
          </svg>
          <p className="fs-3 fw-bold mt-n3">68%</p>
          <p className="text-bold small">Successful deals</p>
        </div>

       {/* Right: KPIs - Updated Layout */}
        <div className="col-md-4 d-flex justify-content-around text-center">
        <div>
       <h2 className="fw-semibold mb-1">53</h2>
       <br />
       <br />
       <p className="d-flex align-items-center small mb-0 fw-semibold">
        Tasks in progress&nbsp;
       <span style={{ fontWeight: 'bold' }}>&rarr;</span>
        </p>

       </div>
      <div>
      <h2 className="fw-semibold mb-1">$15,890</h2>
      <br />
      <br />
      <p className="d-flex align-items-center small mb-0 fw-semibold">
        Prepayments for Customers &nbsp;
       <span style={{ fontWeight: 'bold' }}>&rarr;</span>
        </p>
      </div>
        </div>

      </div>
    </div>
  );
}
