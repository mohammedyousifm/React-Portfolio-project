import { useState, useEffect } from "react";
import Header from "./components/1-header/header";
import Hero from "./components/2-hero/hero";
import Main from "./components/3-main/main";
import Achievement from "./components/6-achievement/achievement";
import Certificate from "./components/7-certificate/certificate";
import Contact from "./components/4-contact/contact";
import Footer from "./components/5-footer/footer";


function App() {
  const [showScrollBTN, setShowScrollBTN] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Achievement />
      <div className="divider" />
      <Certificate />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      {showScrollBTN && (
        <div>
          <a
            style={{
              opacity: showScrollBTN ? 1 : 0,
              transition: "opacity 0.3s",
            }}
            href="#up"
          >
            <button className="icon-keyboard_arrow_up scroll2top"></button>
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
