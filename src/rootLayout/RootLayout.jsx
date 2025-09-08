import React, { useEffect, useState ,createContext ,useContext } from "react";
import { Outlet } from "react-router-dom";
// import Header from "./header/Header";
import Footer from "./footer/Footer";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderNew from "./header/HeaderNew";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export const LanguageContext = createContext();

const RootLayout = () => {
  const [changelanguase, setChangeLangause] = useState(true);
  useEffect(() => {
    if (!ScrollSmoother.get()) {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });
    }
  }, []);

  
  return (
    <>
    <LanguageContext.Provider value={{ changelanguase, setChangeLangause }}>
      {/* <Header /> */}
      <HeaderNew />
      <div id="smooth-wrapper" className="w-full h-full">
        <div id="smooth-content">
          <Outlet   />
          <Footer />
        </div>
      </div>
      </LanguageContext.Provider>
    </>
  );
};

export default RootLayout;
