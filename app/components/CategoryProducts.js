import React from "react";
import Card from "./Card";

const CategoryProducts = () => {
  //   const getAllProducts = async () => {
  //     const response = await fetch("db.json");
  //     const products = response.json();

  //     return products;
  //   };

  //   console.log(getAllProducts());

  return (
    <section className="max-w-[1240px] mx-auto my-12 bg-[#FFFBF0] p-4">
      <div>
        <p className="text-2xl font-bold">Woman Jacket</p>
      </div>

      <div className="grid grid-cols-4 gap-4 my-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default CategoryProducts;
