import Link from "next/link";
import React from "react";
import Card from "./Card";

const CategoryProducts = ({ products, category }) => {
  return (
    <section className="max-w-[1240px] mx-auto my-12 bg-[#FFFBF0] p-4">
      <div>
        <p className="text-2xl font-bold">{category}</p>
      </div>

      <div className="grid grid-cols-4 gap-4 my-4">
        {products.slice(0, 8)?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-end my-4">
        <Link href={"/"}>
          <button className="py-2 px-4 bg-[#84CC16] rounded-md font-bold text-white">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CategoryProducts;
