import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(Draggable);

const DraggableSlider = () => {
  const { t, i18n } = useTranslation();
  const holderBoxRef = useRef(null);
  const mouseTrackerRef = useRef(null);

  const nameRef = useRef(null);
  const designetionRef = useRef(null);
  const descriptionRef = useRef(null);
  const facesArray = [
    {
      name: `${t("Zebrano.DraggableSlider.person.Robbert.name")}`,
      designastion:  `${t("Zebrano.DraggableSlider.person.Robbert.designation")}`,
      description:`${t("Zebrano.DraggableSlider.person.Robbert.details")}`,
      image: "/images/img1.png",
    },
    {
      name: `${t("Zebrano.DraggableSlider.person.Mathijs.name")}`,
      designastion:  `${t("Zebrano.DraggableSlider.person.Mathijs.designation")}`,
      description:`${t("Zebrano.DraggableSlider.person.Mathijs.details")}`,
      image: "/images/img2.png",
    },
    {
      name: `${t("Zebrano.DraggableSlider.person.Rick.name")}`,
      designastion:  `${t("Zebrano.DraggableSlider.person.Rick.designation")}`,
      description:`${t("Zebrano.DraggableSlider.person.Rick.details")}`,
      image: "/images/img3.png",
    },
    {
      name: `${t("Zebrano.DraggableSlider.person.Dave.name")}`,
      designastion:  `${t("Zebrano.DraggableSlider.person.Dave.designation")}`,
      description:`${t("Zebrano.DraggableSlider.person.Dave.details")}`,
      image: "/images/img1.png",
    },
    {
      name: `${t("Zebrano.DraggableSlider.person.Peter.name")}`,
      designastion:  `${t("Zebrano.DraggableSlider.person.Peter.designation")}`,
      description:`${t("Zebrano.DraggableSlider.person.Peter.details")}`,
      image: "/images/img4.png",
    },
    
  ];

  useEffect(() => {
    const scrollAbleBox = holderBoxRef.current;
    const wrapper = scrollAbleBox.parentElement;

    const maxX = wrapper.clientWidth - scrollAbleBox.scrollWidth;

    Draggable.create(scrollAbleBox, {
      type: "x",
      inertia: true,
      bounds: { minX: maxX, maxX: 0 },
      cursor: "grab",
      onDragStart: function () {
        this.target.style.cursor = "grabbing";
      },
      onDragEnd: function () {
        this.target.style.cursor = "grab";
      },
    });
  }, []);
  useEffect(() => {
    const SliderBox = holderBoxRef.current;
    const tracker = mouseTrackerRef.current;

    if (!SliderBox || !tracker) return;

    const handleMouseMove = (e) => {
      const rect = SliderBox.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Smoothly move tracker using gsap
      gsap.to(tracker, {
        x: x,
        y: y,
        duration: 0.5,
        ease: "elastic.out(1,0.3)",
      });
    };

    SliderBox.addEventListener("mousemove", handleMouseMove);

    // cleanup
    return () => {
      SliderBox.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // =====handle clicked person details=========
  const grabPerson = (person) => {
    nameRef.current.innerHTML = person.name;
    designetionRef.current.innerHTML = person.designastion;
    descriptionRef.current.innerHTML = person.description;
  };

  return (
    <section className="w-full py-20 md:py-40 bg-myColorTwo">
      {/* ========feact array====== */}
      <h1 className="text-3xl lg:text-5xl text-myColorOne ml-5 lg:ml-14 mb-8 lg:mb-14 max-w-xl">
        {t("Zebrano.DraggableSlider.heading")}
      </h1>
      <section id="dragableAndClickableSlider">
        <div className="wrapper w-full h-fit p-5 flex flex-col md:flex-row gap-10  font-Poppins text-myColorOne">
          {/* =====person Details====== */}
          <div className="details w-full  md:w-1/3 lg:1/4 flex justify-center">

          <div className="w-full max-w-xs">
            
            <h3
              ref={nameRef}
              className="text-3xl font-Montserrat font-semibold"
            >
              {t("Zebrano.DraggableSlider.title")}
            </h3>
            <h5 ref={designetionRef} className="text-xl font-Poppins font-bold">
              
            </h5>
            <p ref={descriptionRef} className="mt-10">
              {t("Zebrano.DraggableSlider.description")}
            </p>
          </div>

          </div>
          {/* =========person slider====== */}
          <div className="w-full md:w-2/3 lg:w-3/4 overflow-hidden">
            <div
              ref={holderBoxRef}
              id="SliderBox"
              className="w-max flex gap-8 relative"
            >
              <div
                ref={mouseTrackerRef}
                style={{ left: 0, top: 0 }}
                className="absolute w-20 h-20 flex items-center bg-myColorThree rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <IoIosArrowRoundBack />
                <span>DRAG</span>
                <IoIosArrowRoundForward />
              </div>
              {facesArray.map((person, idx) => (
                <div
                  key={idx}
                  onClick={() => grabPerson(person)}
                  className="w-54 lg:w-72 2xl:w-96 h-fit flex flex-col gap-5"
                >
                  <div className="w-56 h-56 md:w-60 md:h-60 lg:w-72 lg:h-72 2xl:w-96 2xl:h-96">
                    <img
                      src={person.image}
                      alt=""
                      className="w-full h-full  object-cover"
                    />
                  </div>
                  <div className="w-full font-Poppins">
                    <p>
                      <b>{person.name}</b>
                    </p>
                    <p>{person.designastion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DraggableSlider;
