import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const RootLayout = () => {
  useEffect(() => {
    // Ensure smoother is only created once
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
      <div id="smooth-wrapper" className="w-full h-full">
        <div id="smooth-content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
