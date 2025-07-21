import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import ContactSection from "./ContactSection";
import StartingText from "./StartingText";

function Chatarea() {
  const images = [
    'https://i.pinimg.com/736x/ae/fb/da/aefbda6813691770df40ab56c22e43e1.jpg',
    'https://i.pinimg.com/736x/14/79/9f/14799f7d1b7f3ceb95b09791b02f70fd.jpg',
    'https://i.pinimg.com/1200x/ec/31/87/ec318775b97af61e31b923f07718001c.jpg',
    'https://i.pinimg.com/1200x/b2/c1/4a/b2c14a9316ab35f0152b009d750fbdfd.jpg'
  ];




const [showChat, setShowChat] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <>
     <ContactSection 
      showChat={showChat} 
      setShowChat={setShowChat}
      handleContactClick={() => setShowChat(true)}
     />
    { showChat ? <div
        className="rounded-4 d-flex  flex-column  justify-content-between align-items-center "
        style={{
          maxWidth: '700px',
          width: '100%',
          height: '90vh',
          backgroundColor: '#1d1d1d',
          marginTop: '20px',
          overflow: 'hidden'
        }}
      >
        <div
          className="rounded-4"
          style={{
            backgroundImage: `url(${images[count]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '30vh',
            transition: 'background-image 0.5s ease-in-out'
          }}
        ></div>

        {/* Input bar at the bottom */}
        <div
          className="rounded-4 mt-auto d-flex align-items-center px-3"
          style={{
            maxWidth: '650px',
            width: '100%',
            height: '6vh',
            backgroundColor: 'white',
            marginBottom: '10px',
            marginLeft: '10px',
            color: 'black'
          }}
        >
          <input
            type="text"
            placeholder="Type a message..."
            className="form-control border-0"
            style={{
              backgroundColor: 'transparent',
              outline: 'none',
              boxShadow: 'none'
            }}
          />
          <IoIosSend
            className="ms-2"
            style={{
              width: '24px',
              height: '24px',
              cursor: 'pointer'
            }}
          />
        </div>
      </div> : <StartingText /> }
      </>
  );
}

export default Chatarea;
