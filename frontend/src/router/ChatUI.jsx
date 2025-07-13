import Chatarea from "../components/Chatarea"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import Optionbox from "../components/Optionsbox"
import Rightside from "../components/Rightside"

function ChatUI(){
    return (
        <>
        <Nav/>
        <div className="d-flex flex-row gap-4" >
        <Optionbox/>
        <ContactSection/>
        <Chatarea/>
        <Rightside/>
        </div>
        <Footer/>

        </>
    )
}
export default ChatUI