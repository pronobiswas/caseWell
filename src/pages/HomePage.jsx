import React, { useEffect } from "react";
import Banner from "../components/homeComponents/Banner";
import WhyPartner from "../components/homeComponents/WhyPartner";
import Banner2 from "../components/homeComponents/Banner2";
import ContructorComponent from "../components/homeComponents/ContructorComponent";
import ContructorComponent2 from "../components/homeComponents/ContructorComponent2";
import Millwork from "../components/homeComponents/Millwork";
import Stalen from "../components/homeComponents/Stalen";
import InspirationInsight from "../components/homeComponents/InspirationInsight";

const HomePage = () => {
  
  return (
    <div className="w-full h-full bg-bgOne font-myFont">
      <Banner2/>
      <WhyPartner />
      <ContructorComponent2/>
      <Stalen/>
      <InspirationInsight/>
    </div>
  );
};

export default HomePage;
