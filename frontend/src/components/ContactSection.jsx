function ContactSection() {
  const contacts = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div
      className="d-flex flex-column justify-content-start align-items-center rounded-4 gap-3 "
      style={{ maxWidth: '400px',
        height: '90vh',
        width: '17vw',
        
        marginTop:'20px'
       }}
    >
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="contact rounded-4 d-flex flex-row justify-content-start align-items-center  "
          style={{ maxWidth:'400px',width: '17vw', height: '20vh' }}
        >
            <div className="bg-black rounded-circle mx-auto"
            style={{ width: '50px', height: '50px' ,}}></div>
            <div><h6 style={{marginRight:'15px'}}>CONTACT NAME</h6></div>
        </div>
      ))}
    </div>
  );
}

export default ContactSection;
