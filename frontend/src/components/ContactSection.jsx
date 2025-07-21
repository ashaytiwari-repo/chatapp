import { useState } from 'react';
import pp1 from '../assets/pp1.webp';

function ContactSection({ showChat, setShowChat }) {
  const contacts = [1, 2, 3, 4, 5, 6, 7];

  const handleContactClick = () => {
    setShowChat(true);
  };

  return (
    <div
      className="d-flex flex-column justify-content-start align-items-center rounded-4 gap-3"
      style={{
        maxWidth: '400px',
        height: '90vh',
        width: '17vw',
        marginTop: '20px',
      }}
    >
      {contacts.map((contact, index) => (
        <div
          onClick={handleContactClick}
          key={index}
          className="contact rounded-4 d-flex flex-row justify-content-start align-items-center"
          style={{ maxWidth: '400px', width: '17vw', height: '20vh' }}
        >
          <div
            className="rounded-circle mx-3"
            style={{
              width: '50px',
              height: '50px',
              backgroundImage: `url(${pp1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div>
            <h6 style={{ marginRight: '15px' }}>CONTACT NAME</h6>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactSection;
