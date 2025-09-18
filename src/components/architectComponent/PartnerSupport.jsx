import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import BtnComponent from '../homeComponents/utils/BtnComponent';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger, SplitText);

const PartnerSupport = () => {
  const { t, i18n } = useTranslation();
  const partnerSupportRef = useRef(null);
  const partnerHeading = useRef(null);
  const partnerHeading2Ref = useRef(null);
  const partnerDes = useRef(null);
  const imgRef = useRef(null);
  const splitDesc = useRef(null); // Store the SplitText instance for cleanup

  useLayoutEffect(() => {
    // Clean up the previous SplitText instance if it exists
    if (splitDesc.current) {
      splitDesc.current.revert();
    }

    // Split text again
    splitDesc.current = new SplitText(partnerDes.current, { type: 'words' });

    // Initialize animations after splitting text
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(partnerHeading.current, {
        y: 100,
        opacity: 0,
        ease: 'power2.out',
        duration: 1,
        scrollTrigger: {
          trigger: partnerSupportRef.current,
          start: 'top 80%',
          end: '+=100',
          scrub: true,
        },
      });

      // Paragraph animation
      if (partnerDes.current) {
        gsap.from(splitDesc.current.words, {
          x: 30,
          opacity: 0,
          ease: 'power2.out',
          duration: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: partnerSupportRef.current,
            start: 'top 60%',
            end: '+=200',
            scrub: true,
          },
        });
      }

      // Heading 2 animation
      const spltitHeading2 = new SplitText(partnerHeading2Ref.current, {
        type: 'lines, words, chars',
        linesClass: 'lines block overflow-hidden pb-1',
      });
      gsap.from(spltitHeading2.words, {
        y: 30,
        opacity: 0,
        ease: 'power2.out',
        duration: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: partnerHeading2Ref.current,
          start: 'top 80%',
          end: '+=200',
          scrub: true,
        },
      });

      // Image animation
      gsap.from(imgRef.current, {
        scale: 1.3,
        opacity: 0,
        ease: 'power2.out',
        duration: 1,
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 80%',
          end: '+=300',
          scrub: true,
        },
      });
    });

    return () => {
      ctx.revert(); // Cleanup on unmount
    };
  }, [i18n.language]); // Re-run the effect when language changes

  return (
    <>
      <section
        key={i18n.language} // Use language as a key to force re-render
        ref={partnerSupportRef}
        id="partnerSupport"
        className="w-full h-full bg-[#F2F0EA]"
      >
        <div className="partnerSupportWrapper p-5 md:p-14 font-geist">
          <div className="partnerHeader w-full h-full flex pb-12">
            <div className="w-full md:w-1/2">
              <h2 ref={partnerHeading} className="text-2xl">
                {t('Architects.PartnerSupport.partnerHeading.title')}
              </h2>
            </div>

            <div className="w-full md:w-1/2">
              <p ref={partnerDes} className="text-sm mb-8">
                {t('Architects.PartnerSupport.partnerHeading.desc')}
              </p>
              <BtnComponent text={t('Architects.PartnerSupport.partnerHeading.btnText')} />
            </div>
          </div>

          <div className="professionalDemand border border-gray-300 border-x-0 pt-14 pb-16">
            <div className="demandWrapper flex flex-col md:flex-row gap-14">
              <div className="w-full md:w-1/2 flex flex-col gap-5 justify-center">
                <h2 ref={partnerHeading2Ref} className="text-3xl md:text-5xl w-full">
                  {t('Architects.PartnerSupport.professionalDemand.heading')}
                </h2>

                <p>{t('Architects.PartnerSupport.professionalDemand.textOne')}</p>
                <p>{t('Architects.PartnerSupport.professionalDemand.textTwo')}</p>
                <p>{t('Architects.PartnerSupport.professionalDemand.textThree')}</p>
              </div>
              <div className="w-full md:w-1/2 ">
                <div className="imageWrapper w-full h-[556px] overflow-hidden">
                  <img ref={imgRef} src="/images/profession1.jpg" alt="profession" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerSupport;
