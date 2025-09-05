import React from "react";
import { useSelector } from "react-redux";

const SingleShowCaseProduct = () => {
  const data = useSelector((state) => state.ShowCaseProductSlice.value);
console.log(data);


  if (!data || data.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="py-32 px-12">
      <h2>Single ShowCase Products</h2>
      {/* {data.map((item, idx) => (
        <div key={idx} className="p-2 border-b">
          <p className="name font-bold">{item.name}</p>
          <p className="title">{item.title}</p>
          <p className="category">{item.category}</p>
        </div>
      ))} */}
    </div>
  );
};

export default SingleShowCaseProduct;
