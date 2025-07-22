import React, { useEffect } from "react";
import Banner from "../components/homeComponents/Banner";
import WhyPartner from "../components/homeComponents/WhyPartner";
import Banner2 from "../components/homeComponents/Banner2";

const HomePage = () => {
  
  return (
    <div>
      {/* <Banner /> */}
      <Banner2/>
      <WhyPartner />
    </div>
  );
};

export default HomePage;
