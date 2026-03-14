import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import './result.css';

const trendData = [
  { name: '0', daily: 5, weekly: 10 },
  { name: '4', daily: 10, weekly: 15 },
  { name: '8', daily: 15, weekly: 20 },
  { name: '12', daily: 12, weekly: 22 },
  { name: '14', daily: 25, weekly: 18 },
];

const ResultPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")} style={{cursor: 'pointer'}}>
          <strong>🧬 Commit DNA</strong>
        </div>
        <div className="nav-links">
          <button onClick={() => navigate("/")}>Home</button>
          <button className="active-nav">Dashboard</button>
        </div>
      </nav>

      <div className="content-wrapper">
        <div className="main-card">
          <h2 className="card-header">Developer DNA Core: Insights & Activity</h2>
          <div className="stats-grid">
            <div className="profile-info">
              <h1 className="dev-name-text">Ankit</h1>
              <p className="label-sub">Developer Name</p>
              <div className="total-commits">320</div>
              <p className="label-sub">Total Commits</p>
            </div>
            <div className="vertical-line"></div>
            <div className="commit-behavior">
              <h3 className="behavior-title">Commit Behavior</h3>
              <div className="behavior-grid">
                <div className="stat-column">
                  <p>Bugs: <strong>8.7%</strong></p>
                  <p>Bug Rate: <strong>8.7%</strong></p>
                  <p>Features: <strong>3.2%</strong></p>
                </div>
                <div className="stat-column">
                  <p>Feature: <strong>5.1%</strong></p>
                  <p>Features: <strong>51%</strong></p>
                  <p>Ease: <strong>5.2%</strong></p>
                </div>
              </div>
              <div className="weekend-tag-box">Weekend Coding (15%)</div>
            </div>
          </div>
        </div>

        <div className="bottom-grid">
          <div className="sub-card language-box">
            <p>Primary Dev Language: <span className="highlight-blue">Javascript</span></p>
            <p>Focus Area: <strong>UI/UX</strong></p>
            <p>Code Velocity: <span className="velocity-high">High</span></p>
          </div>
          
          <div className="sub-card chart-box" style={{ minHeight: '150px' }}>
            <h3 style={{ marginBottom: '10px' }}>Recent Activity Trend</h3>
            <div style={{ width: '100%', height: '100px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <Line type="monotone" dataKey="daily" stroke="#007bff" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="weekly" stroke="#00d1b2" strokeWidth={2} dot={false} />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;