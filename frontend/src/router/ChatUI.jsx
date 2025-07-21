import { useState } from "react";
import Chatarea from "../components/Chatarea";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Optionbox from "../components/Optionsbox";
import StartingArea from "../components/StartingText";
import Rightside from "../components/Rightside";

function ChatUI() {
    const [showChat, setShowChat] = useState(false);

    const handleContactClick = () => {
        setShowChat(true);
    };

    return (
        <>
            {/* <Nav /> */}
            <div className="d-flex flex-row gap-4">
                {/* <Optionbox /> */}
                {/* <ContactSection onClick={handleContactClick} /> */}
                 <Chatarea /> 
                {/* <Rightside /> */}
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default ChatUI;
