import React from "react";
import Banar from "../components/Banar";
import { products } from "../db/products";
import Shopping from "../assets/shopping.png";
import Card from "../components/Card";

const Products = () => {
  return (
    <div>
      <Banar image={Shopping} />

      <section className="max-w-[1240px] mx-auto my-12 p-4">
        <div className=" flex justify-center items-center my-6">
          <button className="w-[200px] text-center bg-[#84CC16] hover:bg-[#FABE4C] duration-300 text-white m-2 py-2 px-4 rounded-md ">
            Men's Pants
          </button>
          <button className="w-[200px] text-center bg-[#84CC16] hover:bg-[#FABE4C] duration-300 text-white m-2 py-2 px-4 rounded-md ">
            Men's Sneaker
          </button>
          <button className="w-[200px] text-center bg-[#84CC16] hover:bg-[#FABE4C] duration-300 text-white m-2 py-2 px-4 rounded-md ">
            Men's Boot
          </button>
          <button className="w-[200px] text-center bg-[#84CC16] hover:bg-[#FABE4C] duration-300 text-white m-2 py-2 px-4 rounded-md ">
            Bag
          </button>
          <button className="w-[200px] text-center bg-[#84CC16] hover:bg-[#FABE4C] duration-300 text-white m-2 py-2 px-4 rounded-md ">
            Cap
          </button>
          <button className="w-[200px] text-center bg-[#84CC16] hover:bg-[#FABE4C] duration-300 text-white m-2 py-2 px-4 rounded-md ">
            Earphones
          </button>
          <button className="w-[200px] text-center bg-[#84CC16] hover:bg-[#FABE4C] duration-300 text-white m-2 py-2 px-4 rounded-md ">
            Bottle
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 my-4">
          {products?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-end my-4"></div>
      </section>
    </div>
  );
};

export default Products;
