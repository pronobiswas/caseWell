import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

gsap.registerPlugin(Draggable);

const DraggableSlider = () => {
  const holderBoxRef = useRef(null);
  const mouseTrackerRef = useRef(null);

  const nameRef = useRef(null);
  const designetionRef = useRef(null);
  const descriptionRef = useRef(null);
  const facesArray = [
    {
      name: "Robbert ",
      designastion: "  – Interim Finance ",
      description:
        "Coming from a finance consulting background with an dose of creativity, Robbert decided to combine his talents to help Zebrano grow. As one of the brothers who started the Zebrano journey, he bridges strategy and design, ensuring every business decision aligns with our creative visi",
      image: "/images/img1.png",
    },
    {
      name: "Mathijs  ",
      designastion: "– Owner & Woodworker ",
      description:'With more than 15 years of experience in construction management and large-scale projects, Mathijs built a reputation for precision and leadership. From a young age, his passion for woodworking was evident, and over time he transitioned from running a midsize construction company to founding Zebrano Studio — where craftsmanship meets luxury design. Quote: “From wood grains to grand designs — every detail tells a story.” ',
      image: "/images/img2.png",
    },
    {
      name: "Rick ",
      designastion: " – Wood Specialist ",
      description:
        "Rick is our true specialist in wood. Trained in carpentry and woodworking, he knows every detail about the craft — from selecting the right species to cutting with millimeter precision. His deep knowledge ensures that each Zebrano piece is not only beautiful, but technically flawless.",
      image: "/images/img3.png",
    },
    {
      name: "Dave ",
      designastion: " – Marketing & Sales",
      description:
        "Dave brings a creative commercial edge to Zebrano Studio. With experience in brand storytelling and customer relations, he ensures that our vision reaches both homeowners and architects. He is the link between our workshop and the world, making sure every client feels guided and inspired throughout the process.",
      image: "/images/img1.png",
    },
    {
      name: "Peter  ",
      designastion: "– Woodworker ",
      description:'Peter represents the heart of our workshop. Skilled in both modern techniques and traditional joinery, he brings an artisan’s patience and precision to every door. Known for his steady hands and meticulous eye, Peter ensures that every piece leaving the studio carries the Zebrano standard.',
      image: "/images/img4.png",
    },
    {
      name: "Rick ",
      designastion: " – Wood Specialist ",
      description:
        "Rick is our true specialist in wood. Trained in carpentry and woodworking, he knows every detail about the craft — from selecting the right species to cutting with millimeter precision. His deep knowledge ensures that each Zebrano piece is not only beautiful, but technically flawless.",
      image: "/images/img3.png",
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
      <section id="dragableAndClickableSlider">
        <div className="wrapper w-full h-fit p-5 flex flex-col md:flex-row gap-10  font-Poppins text-myColorOne">
          {/* =====person Details====== */}
          <div className="details w-full  md:w-1/3 lg:1/4 flex justify-center">

          <div className="w-full max-w-xs">
            <h3
              ref={nameRef}
              className="text-3xl font-Montserrat font-semibold"
            >
              Person Name
            </h3>
            <h5 ref={designetionRef} className="text-xl font-Poppins font-bold">
              Designetion
            </h5>
            <p ref={descriptionRef} className="mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quidem hic libero dolorem. Incidunt molestiae
              recusandae veniam, tempora totam quo.
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
