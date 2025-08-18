import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";


const ZebranoFace = () => {
  const [index, setIndex] = useState(0);
  const progressRef = useRef(null);
  const viewportRef = useRef(null);   // <- the masked viewport (overflow-hidden)
  const trackRef = useRef(null);      // <- the flex track that slides

  const next = () => {
    const len = trackRef.current?.children.length ?? 1;
    setIndex((i) => Math.min(i + 1, len - 1));
  };
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const slides = Array.from(track.children);
    const clamped = Math.max(0, Math.min(index, slides.length - 1));

    // where the target slide starts inside the track
    const targetOffset = slides[clamped].offsetLeft;

    // don’t allow the track to scroll past the end
    const maxOffset = track.scrollWidth - viewport.clientWidth;
    const x = -Math.min(targetOffset, Math.max(0, maxOffset));

    gsap.to(track, { x, duration: 0.6, ease: "power3.out" });

    // progress based on how far the viewport’s right edge has moved across the track
    const progress = ((Math.min(targetOffset, maxOffset) + viewport.clientWidth) / track.scrollWidth) * 100;
    gsap.to(progressRef.current, { width: `${progress}%`, duration: 0.4 });
  }, [index]);
  return (
    <>
    <section id="faceSlider">
      {/* ...header/buttons... */}
      <div className="w-full flex">
        <div className="w-1/3">{/* ...copy... */}</div>

        {/* VIEWPORT (mask) */}
        <div className="w-2/3">
          <div ref={viewportRef} className="w-full overflow-hidden">
            {/* TRACK (slides row) – no extra wrappers, no left-[70%] */}
            <div
              ref={trackRef}
              className="flex flex-nowrap gap-10 [&>div]:shrink-0 will-change-transform"
            >
              {/* slides */}
              <div className="slideItem w-fit">
                <img src="/images/slideImage1.jpg" className="w-[432px] h-auto" alt="" />
                <div className="mt-5"><p>1 Top Performing Cabinet</p><p>Finishes of 2025</p></div>
              </div>
              <div className="slideItem w-fit">
                <img src="/images/slideImage5.jpg" className="w-[392px] h-[450px] object-cover" alt="" />
                <div className="mt-5"><p> 2 Top Performing Cabinet</p><p>Finishes of 2025</p></div>
              </div>
              <div className="slideItem w-fit">
                <img src="/images/slideImage3.jpg" className="w-[420px] h-auto" alt="" />
                <div className="mt-5"><p>3 Top Performing Cabinet</p><p>Finishes of 2025</p></div>
              </div>
              <div className="slideItem w-fit">
                <img src="/images/slideImage4.jpg" className="w-[432px] h-auto" alt="" />
                <div className="mt-5"><p>4 Top Performing Cabinet</p><p>Finishes of 2025</p></div>
              </div>
              <div className="slideItem w-fit">
                <img src="/images/slideImage5.jpg" className="w-[412px] h-auto object-cover" alt="" />
                <div className="mt-5"><p> 5 Top Performing Cabinet</p><p>Finishes of 2025</p></div>
              </div>
              <div className="slideItem w-fit">
                <img src="/images/slideImage1.jpg" className="w-[432px] h-auto" alt="" />
                <div className="mt-5"><p>6 Top Performing Cabinet</p><p>Finishes of 2025</p></div>
              </div>
              <div className="slideItem w-fit">
                <img src="/images/slideImage5.jpg" className="w-[392px] h-[450px] object-cover" alt="" />
                <div className="mt-5"><p>7 Top Performing Cabinet</p><p>Finishes of 2025</p></div>
              </div>
              {/* ...more if you want... */}
            </div>
          </div>
        </div>
      </div>

      {/* controls */}
      <div className="flex gap-2 mt-4">
        <button onClick={prev} className="bg-bgOne w-8 h-8 rounded-full">‹</button>
        <button onClick={next} className="bg-bgOne w-8 h-8 rounded-full">›</button>
      </div>

      {/* progress */}
      <div className="w-full h-[2px] bg-gray-300 mt-4">
        <div ref={progressRef} className="h-full bg-black" style={{ width: "0%" }} />
      </div>
    </section>
    </>
  )
}

export default ZebranoFace