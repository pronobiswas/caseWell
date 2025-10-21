import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnComponent from "../../components/homeComponents/utils/BtnComponent";
import { Link } from "react-router-dom";
import { IoMailUnread } from "react-icons/io5";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaHeadphones, FaPinterest, FaSquarePhone } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { t } = useTranslation();
  const footerRef = useRef(null);
  const svgRef = useRef(null);

  //  useEffect(() => {
  //   const svg = svgRef.current;
  //   if (!svg) return;

  //   const paths = svg.querySelectorAll("path");

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: svg,
  //       start: "top 90%",
  //       end: "top 80%",
  //       scrub: true,
  //     },
  //   });

  //   let drawIndex = 0;

  //   paths.forEach((path) => {
  //     const length = path.getTotalLength();

  //     gsap.set(path, {
  //       strokeDasharray: length,
  //       strokeDashoffset: length,
  //       strokeWidth: 0.5,
  //       stroke: "none",
  //       fill: "none",
  //     });

  //     tl.to(
  //       path,
  //       {
  //         strokeDashoffset: 0,
  //         fill: "white",
  //         duration: 0.8,
  //         ease: "power1.inOut",
  //       },
  //       drawIndex * 0.05
  //     );

  //     drawIndex++;
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((st) => st.kill());
  //     tl.kill();
  //   };
  // }, []);

  return (
    <>
      <footer
        ref={footerRef}
        id="footer"
        className="w-full h-full p-2 bg-bgOne"
      >
        <div className="footerWrapper pt-12 pb-0 px-5 md:px-7 lg:px-12 rounded-[50px] bg-myColorThree">
          {/* ======footer row one===== */}
          <div className="footerRow w-full flex flex-col md:flex-row justify-between gap-8">
            {/* ----w-1/2----- */}
            <div className="w-full md:w-1/2 2xl:w-2/3">
              <h2 className="w-full max-w-[520PX] text-4xl md:text-5xl font-Montserrat font-bold mb-8 text-myColorOne">
                {t("footer.title")}
              </h2>
              <div className="w-full">
                <Link to="/collection" className="w-full bg-myColorOne">
                  <BtnComponent text="See our collection" />
                </Link>
              </div>
            </div>
            {/* -----w-1/2-------- */}
            <div className="w-full md:w-1/2 xl:w-1/3 flex flex-wrap md:flex-nowrap gap-6 justify-between">
              {/* ---products--- */}
              <div className="">
                <h5 className="text-base lg:text-xl font-poppins font-semibold mb-5 text-myColorOne uppercase">
                  {t("footer.Products")}
                </h5>
                <ul className="w-fit flex flex-col  gap-2 [&>li]:text-base  [&>li]:font-Poppins [&>li]:cursor-pointer [&>li]:text-colorOne ">
                  <li className="navLinkItem w-fit relative">
                    <Link to="/products">
                      <div className="gggg">
                        <div className="red text-sm lg:text-base w-fit ">{t("footer.Products")}</div>
                        <div className="blue text-sm lg:text-base w-fit ">{t("footer.Products")}</div>
                      </div>
                    </Link>
                  </li>
                  <li className="navLinkItem w-fit relative">
                    <Link to="/products/material">
                      <div className="gggg">
                        <div className="red text-sm lg:text-base w-fit ">{t("footer.Materials")}</div>
                        <div className="blue text-sm lg:text-base w-fit ">{t("footer.Materials")}</div>
                      </div>
                    </Link>
                  </li>
                  <li className="navLinkItem w-fit relative">
                    <Link to="/collection">
                      <div className="gggg">
                        <div className="red text-sm lg:text-base w-fit ">{t("footer.Collection")}</div>
                        <div className="blue text-sm lg:text-base w-fit ">{t("footer.Collection")}</div>
                      </div>
                    </Link>
                  </li>
                  <li className="navLinkItem w-fit relative">
                    <Link to="/configurator">
                      <div className="gggg">
                        <div className="red text-sm lg:text-base w-fit ">{t("footer.Configuration")}</div>
                        <div className="blue text-sm lg:text-base w-fit ">{t("footer.Configuration")}</div>
                      </div>
                    </Link>
                  </li>
                  <li className="navLinkItem w-fit relative">
                    <Link to="/architects">
                      <div className="gggg">
                        <div className="red text-sm lg:text-base w-fit ">{t("footer.Architects")}</div>
                        <div className="blue text-sm lg:text-base w-fit ">{t("footer.Architects")}</div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* ---zebrano--- */}
              <div className="">
                <h5 className="text-base lg:text-xl font-poppins font-semibold mb-5 text-myColorOne uppercase">
                  {t("footer.Zebrano")}
                </h5>
                <ul className="w-fit flex flex-col  gap-2 [&>li]:text-base  [&>li]:font-Poppins [&>li]:cursor-pointer [&>li]:text-colorOne ">
                  <li className="navLinkItem w-fit relative">
                    <Link to="/inspiration">
                      <div className="gggg">
                        <div className="red text-sm lg:text-base w-fit ">{t("footer.Inspiration")}</div>
                        <div className="blue text-sm lg:text-base w-fit ">{t("footer.Inspiration")}</div>
                      </div>
                    </Link>
                  </li>
                  <li className="navLinkItem w-fit relative">
                    <Link to="/aboutus">
                      <div className="gggg">
                        <div className="red text-sm lg:text-base w-fit ">{t("footer.About")}</div>
                        <div className="blue text-sm lg:text-base w-fit ">{t("footer.About")}</div>
                      </div>
                    </Link>
                  </li>
                  <li className="navLinkItem w-fit relative">
                    <Link to="/aboutus/ourStory">
                      <div className="gggg">
                        <div className="red text-sm lg:text-base w-fit max-w-36 2xl:max-w-full truncate">{t("footer.Story")}</div>
                        <div className="blue text-sm lg:text-base w-fit max-w-36 2xl:max-w-full truncate">{t("footer.Story")}</div>
                      </div>
                    </Link>
                  </li>
                  <li className="navLinkItem w-fit relative">
                    <Link to="/aboutus/theMakers">
                      <div className="gggg">
                        <div className="red text-sm lg:text-base w-fit max-w-36 2xl:max-w-full truncate">{t("footer.OurTeam")}</div>
                        <div className="blue text-sm lg:text-base w-fit max-w-36 2xl:max-w-full truncate">{t("footer.OurTeam")}</div>
                      </div>
                    </Link>
                  </li>
                  <li className="navLinkItem w-fit relative">
                    <Link to="/aboutus/ConsciousNcrafts">
                      <div className="gggg">
                        <div className="red text-sm lg:text-base w-fit max-w-36 2xl:max-w-full truncate">{t("footer.ConsciousCraft")}</div>
                        <div className="blue text-sm lg:text-base w-fit max-w-36 2xl:max-w-full truncate">{t("footer.ConsciousCraft")}</div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* ---service--- */}
              <div className="">
                <h5 className="text-base lg:text-xl font-poppins font-semibold mb-5 text-myColorOne uppercase">
                  {t("footer.Service")}
                </h5>
                <ul className="w-fit flex flex-col  gap-2 [&>li]:text-base  [&>li]:font-Poppins [&>li]:cursor-pointer [&>li]:text-colorOne ">
                  <li className="navLinkItem w-fit relative">
                    <Link to="/contact">
                      <div className="gggg">
                        <div className="red text-sm lg:text-base w-fit max-w-36 2xl:max-w-full truncate">{t("footer.Contact")}</div>
                        <div className="blue text-sm lg:text-base w-fit max-w-36 2xl:max-w-full truncate">{t("footer.Contact")}</div>
                      </div>
                    </Link>
                  </li>
                  <li className="navLinkItem w-fit relative">
                    <Link to="/aboutus/services">
                      <div className="gggg">
                        <div className="red text-sm lg:text-base w-fit max-w-36 2xl:max-w-full truncate">{t("footer.FAQ")}</div>
                        <div className="blue text-sm lg:text-base w-fit max-w-36 2xl:max-w-full truncate">{t("footer.FAQ")}</div>
                      </div>
                    </Link>
                  </li>
                  <li className="navLinkItem w-fit relative">
                    <Link to="/terms">
                      <div className="gggg">
                        <div className="red text-sm lg:text-base w-fit max-w-36 2xl:max-w-full truncate">{t("footer.TermsConditions")}</div>
                        <div className="blue text-sm lg:text-base w-fit max-w-36 2xl:max-w-full truncate">{t("footer.TermsConditions")}</div>
                      </div>
                    </Link>
                  </li>
                  <li className="navLinkItem w-fit relative">
                    <Link to="/privacy-Policy">
                      <div className="gggg">
                        <div className="red text-sm lg:text-base w-fit max-w-36 2xl:max-w-full truncate">{t("footer.PrivacyPolicy")}</div>
                        <div className="blue w-fit text-sm lg:text-base max-w-36 2xl:max-w-full truncate">{t("footer.PrivacyPolicy")}</div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ======footer row two===== */}
          <div className="footerRow w-full">
            <div className="w-full flex justify-between items-end pt-7 pb-5">
              <div className="flex gap-5 text-4xl text-white py-5">
                <a
                  href="http://pinterest.com/zebranostudio"
                  title="http://pinterest.com/zebranostudio"
                >
                  <FaPinterest />
                </a>
                <a
                  href="http://instagram.com/zebrano.studio"
                  title="http://instagram.com/zebrano.studio"
                >
                  <FaInstagramSquare />
                </a>
              </div>
              <div className="w-1/2 lg:w-1/3 ">
                <Link to="/">
                  <img
                    src="/images/footerLogo.png"
                    alt="images"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* =====footer row three===== */}
          <div className="w-full p-5">
            <p className="text-myColorOne font-Poppins text-center">
              {t("footer.footNone")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
