import React from 'react';
import '../App.css';

const Page = ({ title, content }) => (
  <div className="page">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

export const Settings = () => (
  <Page
    title="Settings"
    content="Configure your preferences for the Weather App. If you have any issues or need assistance, please contact our support team:

    Support Email: support@weatherapp.com
    Support Phone: +1-555-5678
    Support Hours: Monday to Friday, 9 AM - 5 PM (GMT)"
  />
);

export default Settings;
