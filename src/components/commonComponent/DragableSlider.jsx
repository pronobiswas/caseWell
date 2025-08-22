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
            name: "Mathijs",
            designastion: "Owner and woodworker",
            description:
                "Necessitatibus illo, ipsam laboriosam ex voluptates beatae reprehenderit, quisquam fugiat consectetur voluptate aliquam dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "/images/img1.png",
        },
        {
            name: "Robbert",
            designastion: "Designer",
            description:
                "Consequatur, esse iure eum velit porro libero voluptatum. Cum, necessitatibus illo, ipsam laboriosam ex voluptates beatae reprehenderit, quisquam fugiat consectetur voluptate aliquam dignissimos!",
            image: "/images/img2.png",
        },
        {
            name: "Rick",
            designastion: "Woodworker",
            description:
                "Cum, necessitatibus illo, ipsam laboriosam ex voluptates beatae reprehenderit, quisquam fugiat consectetur voluptate aliquam dignissimos! Consequatur, esse iure eum velit porro libero voluptatum.",
            image: "/images/img3.png",
        },
        {
            name: "Mathijs",
            designastion: "Owner and woodworker",
            description:
                "Voluptate aliquam dignissimos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ex voluptates beatae reprehenderit.",
            image: "/images/img4.png",
        },
        {
            name: "Robbert",
            designastion: "Designer",
            description:
                "Velit porro libero voluptatum. Cum, necessitatibus illo, ipsam laboriosam ex voluptates beatae reprehenderit, quisquam fugiat consectetur voluptate aliquam dignissimos!",
            image: "/images/img2.png",
        },
        {
            name: "Rick",
            designastion: "Woodworker",
            description:
                "Necessitatibus illo, ipsam laboriosam ex voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, esse iure eum velit porro libero voluptatum.",
            image: "/images/img3.png",
        },
        {
            name: "Rafi vai",
            designastion: "Owner and woodworker",
            description:
                "Necessitatibus illo, ipsam laboriosam ex voluptates beatae reprehenderit, quisquam fugiat consectetur voluptate aliquam dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "/images/img1.png",
        },
        {
            name: "Anik Sharma",
            designastion: "Designer",
            description:
                "Consequatur, esse iure eum velit porro libero voluptatum. Cum, necessitatibus illo, ipsam laboriosam ex voluptates beatae reprehenderit, quisquam fugiat consectetur voluptate aliquam dignissimos!",
            image: "/images/img2.png",
        },
        {
            name: "Mostakim",
            designastion: "Woodworker",
            description:
                "Cum, necessitatibus illo, ipsam laboriosam ex voluptates beatae reprehenderit, quisquam fugiat consectetur voluptate aliquam dignissimos! Consequatur, esse iure eum velit porro libero voluptatum.",
            image: "/images/img3.png",
        },
        {
            name: "RAkib rifat",
            designastion: "Owner and woodworker",
            description:
                "Voluptate aliquam dignissimos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ex voluptates beatae reprehenderit.",
            image: "/images/img4.png",
        },
        {
            name: "Anikur rahaman",
            designastion: "DSA enginiar",
            description:
                "Velit porro libero voluptatum. Cum, necessitatibus illo, ipsam laboriosam ex voluptates beatae reprehenderit, quisquam fugiat consectetur voluptate aliquam dignissimos!",
            image: "/images/img2.png",
        },
        {
            name: "Farhad vai",
            designastion: "Woodworker",
            description:
                "Necessitatibus illo, ipsam laboriosam ex voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, esse iure eum velit porro libero voluptatum.",
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
                duration: 0.2, // smooth easing
                ease: "power3.out",
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
        console.log(person);
        nameRef.current.innerHTML = person.name;
        designetionRef.current.innerHTML = person.designastion;
        descriptionRef.current.innerHTML = person.description;
    }

    return (
        <section className="w-full py-40">

            {/* ========feact array====== */}
            <section id="dragableAndClickableSlider">
                <div className="wrapper w-full h-fit p-5 flex gap-10 ">
                    {/* =====person Details====== */}
                    <div className="details w-1/3 lg:1/4">
                        <h3 ref={nameRef} className="text-3xl">Person Name</h3>
                        <h5 ref={designetionRef} className="text-xl font-bold">Designetion</h5>
                        <p ref={descriptionRef} className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem hic libero dolorem. Incidunt molestiae recusandae veniam, tempora totam quo.</p>
                    </div>
                    {/* =========person slider====== */}
                    <div className="w-2/3 lg:w-3/4 overflow-hidden">
                        <div ref={holderBoxRef} id="SliderBox" className="w-max flex gap-8 relative">
                            <div ref={mouseTrackerRef}
                                style={{ left: 0, top: 0 }}
                                className="absolute w-20 h-20 flex items-center bg-[#E1DBCB] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                    <IoIosArrowRoundBack/> 
                                    <span>DRAG</span>
                                    <IoIosArrowRoundForward/> 
                                </div>
                            {
                                facesArray.map((person) => (
                                    <div onClick={() => grabPerson(person)} className="w-54 h-fit flex flex-col gap-5">
                                        <div className="w-52 h-52">
                                            <img src={person.image} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-full">
                                            <p>{person.name}</p>
                                            <p>{person.designastion}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </section>
        </section>
    );
};

export default DraggableSlider;
