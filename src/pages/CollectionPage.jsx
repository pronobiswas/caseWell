import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CollectionPage = () => {
  const [activeCollection, setActiveCollection] = useState("Show all");
  const [showCollection, setShowCollection] = useState(true);
  const [filteredCollection, setFilteredCollection] = useState([]);

  const collectionRef = useRef(null);

  const allCollection = [
    {
      title: "title1",
      description: "description one 1",
      image: "/images/img1.png",
      tag: "pivot",
    },
    {
      title: "title2",
      description: "description two 2",
      image: "/images/img2.png",
      tag: "pivot",
    },
    {
      title: "title3",
      description: "description three 3",
      image: "/images/img3.png",
      tag: "slide",
    },
    {
      title: "title4",
      description: "description four 4",
      image: "/images/img4.png",
      tag: "slide",
    },
    {
      title: "title5",
      description: "description five 5",
      image: "/images/slideImage1.jpg",
      tag: "slide",
    },
    {
      title: "title6",
      description: "description six 6",
      image: "/images/glass/glassCollection1.jpg",
      tag: "glass",
    },
    {
      title: "title7",
      description: "description seven",
      image: "/images/glass/glassCollection2.jpg",
      tag: "glass",
    },
    {
      title: "glass title",
      description: "description seven",
      image: "/images/glass/glassCollection3.jpg",
      tag: "glass",
    },
  ];

  const filterByTag = (tag) => {
    setActiveCollection(tag);
    const result = allCollection.filter((item) => item.tag === tag);
    setFilteredCollection(result);
    setShowCollection(false);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const allCollectionBox =
        collectionRef.current.querySelectorAll(".collectionBox");
      const allCollectionButton =
        collectionRef.current.querySelectorAll("button");
      allCollectionBox.forEach((box) => {
        const randomX = gsap.utils.random(-50, 50);
        const randomY = gsap.utils.random(-50, 50);
        const randomScale = gsap.utils.random(0.5, 1);

        gsap.from(box, {
          x: randomX,
          y: randomY,
          scale: randomScale,
          opacity: 0,
          duration: 0.5,
          ease: "power3.inout",
        });
      });
    });

    return () => ctx.revert();
  }, [filteredCollection, showCollection]);

  return (
    <section ref={collectionRef} id="collections">
      <div className="wrapper w-full h-full bg-colorOne p-5 md:p-10 lg:p-14 md:pt-28 lg:pt-32">
        {/* =====collection header========= */}
        <div className="">
          <h1 className="text-textLight text-5xl font-NoeDisplayBold">
            Some of our Collections
          </h1>
        </div>
        {/* ====collection nevigetor===== */}
        <div className="w-full py-10 flex gap-5 [&>button]:text-xl [&>button]:text-bgTwo [&>button]:py-1 [&>button]:px-5 [&>button]:border [&>button]:rounded-full">
          <button onClick={() => setShowCollection(true)}>Show all</button>
          <button onClick={() => filterByTag("glass")}>Glass</button>
          <button onClick={() => filterByTag("pivot")}>Pivot</button>
          <button onClick={() => filterByTag("slide")}>Slide</button>
        </div>

        <div className="w-full h-full flex flex-wrap gap-5">
          {(showCollection ? allCollection : filteredCollection).map(
            (item, index) => (
              <div
                key={index}
                className="collectionBox w-[calc(33%-20px)] aspect-[4/3] border bg-bgOne"
              >
                <div className="w-full h-full">
                  <img
                    src={item.image}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-3 px-1">
                  <p className="text-xl font-semibold text-colorOne">
                    {item.title}
                  </p>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CollectionPage;
