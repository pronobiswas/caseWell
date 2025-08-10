import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnComponent from '../homeComponents/utils/BtnComponent';


gsap.registerPlugin(ScrollTrigger);

const DoorDescription = () => {
  const optionOneRef = useRef(null);
  useEffect(() => {
    if (!optionOneRef.current) return;

    const ctx = gsap.context(() => {
      const optionOneCols = optionOneRef.current.querySelectorAll('.optionOneCol');

      gsap.from(optionOneCols, {
        y: 100,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: optionOneRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: true,
        },
      });
    }, optionOneRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section>
        <div className="wrapper w-full bg-bgOne">
          <div ref={optionOneRef} className="cabinetaryOptionOne w-full h-full flex flex-col md:flex-row gap-5">

            <div className="optionOneCol w-full md:w-1/2 px-8 py-32 bg-bgTwo">
              <span>have a question !</span>
              <div className='flex flex-col gap-14 mt-5'>
                <h3 className='font-myFont text-3xl'>What is a Pivot door?</h3>

                <p>Pivot doors are a striking architectural feature, distinguished by their unique rotational axis. Unlike traditional hinged doors, a pivot door rotates on a vertical pin located a few inches from the door frame, rather than on hinges attached to the side. This mechanism allows for much larger and heavier doors, creating a dramatic and impressive entrance.</p>
                <BtnComponent text='See Contractor Services' />
              </div>
            </div>

            <div className="optionOneCol w-full md:w-1/2  px-8 py-32">
              <div className='flex flex-col gap-6 mt-5'>
                <h3 className='font-myFont text-3xl'>Why choose a pivot door?</h3>
                <ul>
                  <li>
                    <p><b>Modern, sleek design</b> – creates a striking architectural statement.</p>
                  </li>
                  <li>
                    <p><b>Smooth, effortless operation </b>– pivots on a central or offset hinge for easy movement.</p>
                  </li>
                  <li>
                    <p><b>Larger opening sizes</b> – ideal for wide or tall entryways.</p>
                  </li>
                  <li>
                    <p><b>Versatile material options</b> – works with wood, glass, steel, or mixed finishes.</p>
                  </li>
                  <li>
                    <p>
                      <b>Seamless indoor-outdoor flow</b> – perfect for connecting spaces.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Minimal visible hardware</b> – clean, elegant appearance.
                    </p>
                  </li>
                  <li>
                    <p><b>Customizable pivot point</b> – allows unique opening styles and balance.</p>
                  </li>
                </ul>
                <BtnComponent text='See Contractor Services' />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default DoorDescription