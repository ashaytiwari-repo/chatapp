import { useEffect, useRef, useState } from "react";
import ScrollBar from "./components/ScrollBar";
import Welcome from "./components/Welcome";
import Gestures from "./components/Box";
import HeroSection from "./components/HeroSection";
import Contents from "./components/Contents";
import "./App.css";
import Footer from "./components/Footer";
import img from "./images/image.png"
import { useNavigate } from "react-router-dom";

export default function App() {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.4, // % of .hero-cont visible before triggering
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  const navigate=useNavigate()

  return (
    <>
      <div className="main-container">
        <ScrollBar />
        <div className="register-fixed">
          <button className="custom-btn btn btn-primary me-2 bg-white text-black" type="button" onClick={()=>{
            navigate("/signup")
          }}>
            SIGNUP
          </button>
          <button className="custom-btn btn btn-primary bg-white text-black" type="button">
            SIGNIN
          </button>
        </div>
        <div className="mid-cont">
          <Welcome />
          <div className="box">
            <Gestures />
            <Gestures />
          </div>

          <div
            ref={heroRef}
            className={`hero-cont ${isVisible ? "active-bg" : ""}`}
          >
            <HeroSection />
            <Contents />
            <div class="marquee">
              <p>THIS WEBPAGE IS MADE BY ASHAY</p>
            </div>

          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}
