import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnComponent from '../../components/homeComponents/utils/BtnComponent'
import { Link } from 'react-router-dom';
import { IoMailUnread } from 'react-icons/io5';
import { FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { FaHeadphones, FaPinterest, FaSquarePhone } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null)
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
      <footer ref={footerRef} id="footer" className='w-full h-full p-4 bg-[#F2F0EA]'>
        <div className="footerWrapper pt-12 pb-0 px-12 rounded-[50px] bg-colorOne text-white">
          {/* ======footer row one===== */}
          <div className="footerRow flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h2 className='text-5xl  mb-8 '>Luxury doors,<br></br> made accessible.</h2>
              <BtnComponent text='See our collection' />

            </div>
            {/* ====================== */}
            <div className='hidden'>
              <address className='flex flex-col gap-2'>
                <h4 className='text-2xl mb-5'>Contact Info</h4>
                <p>
                  <b>Email:</b>
                  <a href="mailto:Info@zebranostudio.com" className='hover:underline'>Info@zebranostudio.com</a>
                </p>
                <p>
                  <b>Whatsapp: </b>
                  <a href="tel:+31642997018" className='hover:underline'>+31642997018</a>
                </p>
                <p>
                  <b>Telephone: </b>
                  <a href="tel:+31642997018" className='hover:underline'>+31642997018</a>
                </p>
                <p>
                  <b>company number: </b>
                  <a href="tel:60942037" className='hover:underline'>60942037</a>
                </p>
              </address>
            </div>
            {/* ====================== */}
            <div>
              <div className='flex flex-wrap gap-6'>

                <ul className='w-fit flex flex-col  gap-2 [&>li]:text-base xl:[&>li]:text-xl [&>li]:font-myFont [&>li]:cursor-pointer [&>li]:text-white '>

                  <li className='navLinkItem w-fit px-5 relative'>
                    <Link to="/products" >
                      <div className="gggg">
                        <div className='red w-fit '>
                          Products
                        </div>
                        <div className='blue w-fit '>
                          Products
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className='navLinkItem w-fit px-5 relative'>
                    <Link to="/" >
                      <div className="gggg">
                        <div className='red w-fit '>
                          Collection
                        </div>
                        <div className='blue w-fit '>
                          Collection
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className='navLinkItem w-fit px-5 relative'>
                    <Link to="/inspiration" >
                      <div className="gggg">
                        <div className='red w-fit '>
                          Inspiration
                        </div>
                        <div className='blue w-fit '>
                          Inspiration
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className='navLinkItem w-fit px-5 relative'>
                    <Link to="/architects" >
                      <div className="gggg">
                        <div className='red w-fit '>
                          Architects
                        </div>
                        <div className='blue w-fit '>
                          Architects
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className='navLinkItem w-fit px-5 relative'>
                    <Link to="/aboutus" >
                      <div className="gggg">
                        <div className='red w-fit '>
                          About Us
                        </div>
                        <div className='blue w-fit '>
                          About Us
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className='navLinkItem w-fit px-5 relative'>
                    <Link to="/contact" >
                      <div className="gggg">
                        <div className='red w-fit '>
                          Contact
                        </div>
                        <div className='blue w-fit '>
                          Contact
                        </div>
                      </div>
                    </Link>
                  </li>

                </ul>
                <ul className='flex flex-col gap-4 [&>li]:cursor-pointer'>
                  <li><Link to='/terms'>Terms & Conditions</Link></li>
                  <li><Link to='/privacy-Policy'>Privacy Policy</Link></li>
                </ul>
              </div>

            </div>

          </div>
          {/* ======footer row two===== */}
          <div className="footerRow w-full">
            <div className='hidden'>
              <svg ref={svgRef} width="552" height="220" viewBox="0 0 552 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_201_54)">
                  <path d="M46.2617 98.8122H78.3281V109.818H32.8594V99.9239L64.8267 43.5621H32.8594V32.5559H78.3281V42.4503L46.2617 98.8122Z" fill="white" />
                  <path d="M111.981 42.7836V65.4616H135.808V75.8009H111.981V99.4798H138.786V109.818H100.664V32.445H138.786V42.7836H111.981Z" fill="white" />
                  <mask id="mask0_201_54" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="552" height="220">
                    <path d="M0 -2.73216e-05H551.998V220H0V-2.73216e-05Z" fill="none" />
                  </mask>
                  <g mask="url(#mask0_201_54)">
                    <path d="M198.25 96.3672C200.434 94.2925 201.526 91.4027 201.526 87.6951C201.526 83.9159 200.367 80.9142 198.051 78.691C195.734 76.4675 192.656 75.3557 188.819 75.3557H173.927V99.4798H189.215C193.053 99.4798 196.066 98.4429 198.25 96.3672ZM173.927 65.0174H187.925C191.631 65.0174 194.527 64.0718 196.612 62.1829C198.697 60.2927 199.739 57.5687 199.739 54.0112C199.739 50.5284 198.697 47.8048 196.612 45.8406C194.527 43.8778 191.631 42.8942 187.925 42.8942H173.927V65.0174ZM208.972 76.6902C211.553 80.3216 212.844 84.435 212.844 89.0293C212.844 92.9583 211.933 96.4974 210.114 99.6459C208.292 102.797 205.662 105.279 202.221 107.094C198.779 108.912 194.775 109.818 190.208 109.818H162.609V32.5559H188.918C193.617 32.5559 197.654 33.4449 201.03 35.2243C204.405 37.0027 206.952 39.393 208.674 42.3937C210.394 45.3958 211.255 48.7501 211.255 52.4556C211.255 56.9021 210.195 60.6086 208.078 63.5724C205.959 66.5371 203.114 68.7237 199.541 70.1308C203.246 70.8723 206.391 73.0596 208.972 76.6902Z" fill="white" />
                  </g>
                  <mask id="mask1_201_54" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="552" height="220">
                    <path d="M0 -2.73216e-05H551.998V220H0V-2.73216e-05Z" fill="none" />
                  </mask>
                  <g mask="url(#mask1_201_54)">
                    <path d="M246.403 68.7966H258.912C263.147 68.7966 266.341 67.6123 268.492 65.2402C270.642 62.8691 271.719 59.6817 271.719 55.6787C271.719 51.6772 270.66 48.5473 268.542 46.2848C266.423 44.0256 263.214 42.8945 258.912 42.8945H246.403V68.7966ZM270.925 109.818L255.041 78.9138H246.403V109.818H235.086V32.5559H258.912C264.207 32.5559 268.691 33.5948 272.364 35.6685C276.038 37.7442 278.783 40.5235 280.605 44.0063C282.424 47.4911 283.335 51.3818 283.335 55.6787C283.335 60.7195 282.027 65.2955 279.413 69.4089C276.798 73.5214 272.777 76.32 267.351 77.802L284.427 109.818H270.925Z" fill="white" />
                  </g>
                  <mask id="mask2_201_54" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="552" height="220">
                    <path d="M0 -2.73216e-05H551.998V220H0V-2.73216e-05Z" fill="none" />
                  </mask>
                  <g mask="url(#mask2_201_54)">
                    <path d="M346.17 83.6935L334.952 47.7861L323.634 83.6935H346.17ZM349.347 94.0321H320.457L315.493 109.818H303.68L328.399 32.445H341.504L366.224 109.818H354.311L349.347 94.0321Z" fill="white" />
                  </g>
                  <mask id="mask3_201_54" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="552" height="220">
                    <path d="M0 -2.73216e-05H551.998V220H0V-2.73216e-05Z" fill="none" />
                  </mask>
                  <g mask="url(#mask3_201_54)">
                    <path d="M443.562 109.818H432.245L398.193 52.1213V109.818H386.875V32.4454H398.193L432.245 90.0305V32.4454H443.562V109.818Z" fill="white" />
                  </g>
                  <mask id="mask4_201_54" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="552" height="220">
                    <path d="M0 -2.73216e-05H551.998V220H0V-2.73216e-05Z" fill="none" />
                  </mask>
                  <g mask="url(#mask4_201_54)">
                    <path d="M133.918 191.72C130.953 190.268 128.625 188.208 126.931 185.541C125.237 182.874 124.391 179.762 124.391 176.206H134.077C134.288 178.873 135.229 181.067 136.896 182.785C138.563 184.505 140.905 185.363 143.922 185.363C147.045 185.363 149.48 184.519 151.227 182.829C152.974 181.14 153.847 178.962 153.847 176.295C153.847 174.221 153.304 172.531 152.219 171.227C151.134 169.924 149.784 168.915 148.17 168.204C146.555 167.493 144.319 166.724 141.461 165.893C137.861 164.826 134.937 163.745 132.688 162.647C130.437 161.552 128.519 159.847 126.931 157.535C125.344 155.224 124.55 152.142 124.55 148.289C124.55 144.733 125.344 141.621 126.931 138.954C128.519 136.287 130.742 134.241 133.6 132.819C136.459 131.397 139.766 130.685 143.525 130.685C148.871 130.685 153.251 132.183 156.666 135.176C160.08 138.169 161.972 142.274 162.342 147.489H152.338C152.18 145.237 151.227 143.31 149.48 141.71C147.734 140.11 145.431 139.309 142.573 139.309C139.979 139.309 137.861 140.051 136.221 141.532C134.58 143.014 133.759 145.148 133.759 147.933C133.759 149.831 134.276 151.387 135.308 152.601C136.34 153.817 137.65 154.78 139.238 155.49C140.826 156.202 142.995 156.973 145.749 157.802C149.401 158.929 152.378 160.056 154.681 161.181C156.983 162.307 158.941 164.041 160.556 166.382C162.17 168.724 162.977 171.85 162.977 175.761C162.977 178.903 162.223 181.867 160.715 184.652C159.206 187.439 157.009 189.675 154.125 191.364C151.239 193.054 147.839 193.898 143.922 193.898C140.216 193.898 136.882 193.174 133.918 191.72Z" fill="white" />
                  </g>
                  <mask id="mask5_201_54" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="552" height="220">
                    <path d="M0 -2.73216e-05H551.998V220H0V-2.73216e-05Z" fill="none" />
                  </mask>
                  <g mask="url(#mask5_201_54)">
                    <path d="M217.289 131.487V139.755H202.6V193.277H193.549V139.755H178.781V131.487H217.289Z" fill="white" />
                  </g>
                  <mask id="mask6_201_54" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="552" height="220">
                    <path d="M0 -2.73216e-05H551.998V220H0V-2.73216e-05Z" fill="none" />
                  </mask>
                  <g mask="url(#mask6_201_54)">
                    <path d="M243.324 131.486V170.871C243.324 175.555 244.422 179.081 246.619 181.451C248.815 183.823 251.872 185.008 255.79 185.008C259.759 185.008 262.842 183.823 265.039 181.451C267.235 179.081 268.334 175.555 268.334 170.871V131.486H277.386V170.693C277.386 175.732 276.406 180 274.448 183.496C272.489 186.994 269.869 189.602 266.588 191.32C263.305 193.04 259.68 193.898 255.71 193.898C251.741 193.898 248.128 193.04 244.872 191.32C241.618 189.602 239.037 186.994 237.131 183.496C235.226 180 234.273 175.732 234.273 170.693V131.486H243.324Z" fill="white" />
                  </g>
                  <mask id="mask7_201_54" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="552" height="220">
                    <path d="M0 -2.73216e-05H551.998V220H0V-2.73216e-05Z" fill="none" />
                  </mask>
                  <g mask="url(#mask7_201_54)">
                    <path d="M329.949 179.141C333.389 175.229 335.11 169.717 335.11 162.604C335.11 155.433 333.389 149.833 329.949 145.8C326.507 141.771 321.558 139.755 315.102 139.755H306.13V185.009H315.102C321.558 185.009 326.507 183.053 329.949 179.141ZM330.544 135.265C334.963 137.785 338.377 141.4 340.786 146.112C343.194 150.824 344.399 156.322 344.399 162.604C344.399 168.888 343.194 174.34 340.786 178.963C338.377 183.586 334.963 187.128 330.544 189.587C326.124 192.048 320.977 193.277 315.102 193.277H297.078V131.487H315.102C320.977 131.487 326.124 132.746 330.544 135.265Z" fill="white" />
                  </g>
                  <mask id="mask8_201_54" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="552" height="220">
                    <path d="M0 -2.73216e-05H551.998V220H0V-2.73216e-05Z" fill="none" />
                  </mask>
                  <g mask="url(#mask8_201_54)">
                    <path d="M370.363 193.277H361.312V131.487H370.363V193.277Z" fill="none" />
                  </g>
                  <mask id="mask9_201_54" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="552" height="220">
                    <path d="M0 -2.73216e-05H551.998V220H0V-2.73216e-05Z" fill="none" />
                  </mask>
                  <g mask="url(#mask9_201_54)">
                    <path d="M425.147 182.296C428.005 180.429 430.241 177.762 431.856 174.295C433.47 170.827 434.277 166.812 434.277 162.247C434.277 157.683 433.47 153.683 431.856 150.245C430.241 146.808 428.005 144.17 425.147 142.332C422.289 140.496 419.033 139.576 415.381 139.576C411.729 139.576 408.474 140.496 405.615 142.332C402.757 144.17 400.521 146.808 398.906 150.245C397.291 153.683 396.485 157.683 396.485 162.247C396.485 166.812 397.291 170.827 398.906 174.295C400.521 177.762 402.757 180.429 405.615 182.296C408.474 184.163 411.729 185.096 415.381 185.096C419.033 185.096 422.289 184.163 425.147 182.296ZM401.209 189.853C396.894 187.157 393.48 183.394 390.967 178.562C388.452 173.732 387.195 168.293 387.195 162.247C387.195 156.201 388.452 150.778 390.967 145.977C393.48 141.177 396.894 137.428 401.209 134.731C405.522 132.034 410.247 130.685 415.381 130.685C420.568 130.685 425.318 132.034 429.633 134.731C433.946 137.428 437.347 141.177 439.835 145.977C442.322 150.778 443.567 156.201 443.567 162.247C443.567 168.293 442.322 173.732 439.835 178.562C437.347 183.394 433.946 187.157 429.633 189.853C425.318 192.551 420.568 193.898 415.381 193.898C410.247 193.898 405.522 192.551 401.209 189.853Z" fill="white" />
                  </g>
                  <mask id="mask10_201_54" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="552" height="220">
                    <path d="M0 -2.73216e-05H551.998V220H0V-2.73216e-05Z" fill="none" />
                  </mask>
                  <g mask="url(#mask10_201_54)">
                    <path d="M492.302 73.833L494.144 73.8906C494.291 73.8952 494.429 73.9955 494.461 74.1406C494.487 74.2532 494.449 74.3584 494.379 74.4266C494.323 74.4806 494.245 74.5116 494.16 74.5079L492.302 74.432C492.189 74.427 492.097 74.5179 492.097 74.6344C492.097 75.0846 491.791 75.4705 491.367 75.5075C490.85 75.5531 490.415 75.1119 490.415 74.5895V72.8121C490.415 72.3313 490.786 71.9098 491.248 71.9114C491.48 71.9121 491.691 72.011 491.845 72.1721C492 72.335 492.097 72.5584 492.097 72.8058V73.6159C492.097 73.7324 492.189 73.8293 492.302 73.833ZM474.537 44.3372H508.262L488.467 49.003V94.8188L508.229 99.4767H474.537V44.3372ZM464.609 110.594H523.48V33.2204H464.609V110.594Z" fill="white" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_201_54">
                    <rect width="552" height="220" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-full flex justify-between items-end pt-7 pb-5">

              <div className='flex gap-5 text-4xl text-white py-5'>
                <a href="https://www.pinterest.com/" title='https://www.pinterest.com/'>
                  <FaPinterest />
                </a>
                <a href="https://www.instagram.com/" title='https://www.instagram.com/'>
                  <FaInstagramSquare />
                </a>
              </div>
              <div className="w-1/2 lg:w-1/3 ">
                <Link to="/" >
                  <img src="/images/footerLogo.png" alt="images" className='w-full h-full object-cover' />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer
