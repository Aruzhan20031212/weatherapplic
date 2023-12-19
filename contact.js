import React from 'react';
import '../App.css';

const Page = ({ title, content }) => (
  <div className="page">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

export const Contact = () => (
  <Page
    title="Contact Weather App"
    content="If you have any questions, feedback, or need support, feel free to contact us. We are here to help you! You can reach us at:

    Phone: +7(776)-144-11-96
    Address: str. Manas 34/1, Almaty, Kazakhstan"
  />
);

export default Contact;
