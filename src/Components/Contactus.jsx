import {useState} from 'react';
import './Contactus.css';

const ContactUs = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleIssueSelection = (issue) => {
    setSelectedIssue(issue);
    setShowConfirmation(false); // Reset confirmation message
    console.log('Selected issue:', issue);
  };

  const handleQuery = (queryType) => {
    setSelectedQuery(queryType);
    setShowConfirmation(false); // Reset confirmation message
    console.log('Selected query type:', queryType);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowConfirmation(true); // Show confirmation message
  };

  return (
    <div className="contact-us-container">
      {showConfirmation && (
        <p className="confirmation-message">{`Thank you for your ${selectedQuery}. We'll get back to you shortly.`}</p>
      )}
      <div className="issue-list">
        <h2>Common Issues</h2>
        <ul>
          <li onClick={() => handleIssueSelection('Technical Issues')}>Technical Issues</li>
          <li onClick={() => handleIssueSelection('Billing and Payments')}>Billing and Payments</li>
          <li onClick={() => handleIssueSelection('Product Support')}>Product Support</li>
          <li onClick={() => handleIssueSelection('Account Assistance')}>Account Assistance</li>
          <li onClick={() => handleIssueSelection('Other Inquiries')}>Other Inquiries</li>
        </ul>
      </div>
      <div className="help-section">
        <h2>How Can We Assist You?</h2>
        {selectedIssue && (
          <>
            <p className="selected-issue">Selected Issue: {selectedIssue}</p>
            <div className="query-options">
              <button type="button" onClick={() => handleQuery('Product Inquiry')}>Product Inquiry</button>
              <button type="button" onClick={() => handleQuery('Technical Support')}>Technical Support</button>
              <button type="button" onClick={() => handleQuery('General Inquiry')}>General Inquiry</button>
            </div>
          </>
        )}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Submit</button>
        </form> 
      </div>
    </div>
  );
};

export default ContactUs;
