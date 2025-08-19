import React, { useState } from "react";

const CollectionPage = () => {
  const [showCollection, setShowCollection] = useState(true);
  const [filteredCollection, setFilteredCollection] = useState([]);

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
      image: "/images/ais15.jpg",
      tag: "glass",
    },
    {
      title: "title7",
      description: "description seven",
      image: "/images/ais15.jpg",
      tag: "glass",
    },
  ];

  const filterByTag = (tag) => {
    const result = allCollection.filter((item) => item.tag === tag);
    setFilteredCollection(result);
    setShowCollection(false);
  };

  return (
    <section id="collections">
      <div className="wrapper w-full h-full bg-colorOne pt-20">
        <h1 className="text-white text-5xl">Coming soon.</h1>

        <div className="flex gap-5 [&>button]:bg-bgTwo [&>button]:px-5">
          <button onClick={() => filterByTag("glass")}>glass</button>
          <button onClick={() => filterByTag("pivot")}>pivot</button>
          <button onClick={() => filterByTag("slide")}>slide</button>
          <button onClick={() => setShowCollection(true)}>show all</button>
        </div>

        <div className="w-full h-full flex flex-wrap gap-x-5">
          {(showCollection ? allCollection : filteredCollection).map(
            (item, index) => (
              <div
                key={index}
                className="w-[calc(33%-20px)] h-fit border bg-bgOne"
              >
                <div className="w-full h-full">
                  <img
                    src={item.image}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p>{item.title}</p>
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
