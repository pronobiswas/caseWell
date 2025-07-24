import React, { useEffect } from "react";
import Banner from "../components/homeComponents/Banner";
import WhyPartner from "../components/homeComponents/WhyPartner";
import Banner2 from "../components/homeComponents/Banner2";
import ContructorComponent from "../components/homeComponents/ContructorComponent";

const HomePage = () => {
  
  return (
    <div className="w-full h-full bg-[#F2F0EA] font-myFont">
      {/* <Banner /> */}
      <Banner2/>
      <WhyPartner />
      <ContructorComponent/>
    </div>
  );
};

export default HomePage;
