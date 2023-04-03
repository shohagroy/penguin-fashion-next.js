import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { products } from "../../db/products";

const productDetail = ({ params }) => {
  const selectProduct = products?.find(
    (product) => product?.id === params?.productId
  );

  const { category, name, seller, price, ratings, img } = selectProduct || {};

  const moreItems = products.sort(() => 0.5 - Math.random()).slice(0, 10);

  return (
    <section className="max-w-[1240px] mx-auto h-[80vh]  ">
      <div className="grid grid-cols-2 gap-4 my-12">
        <div>
          <Image width={500} height={500} src={img} alt={name} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p>
            Category: <span className="font-semibold">{category}</span>
          </p>
          <p className="text-2xl">
            Price: <span className="font-bold text-[#FABE4C]">${price}</span>
          </p>
          <p className="text-2xl">
            Seller: <span className="font-semibold">${seller}</span>
          </p>
          <p className="text-2xl">
            Ratings: <span className="font-semibold">{ratings}</span>
          </p>

          <div className="my-5">
            <button className=" flex text-xl font-bold px-2 py-1 bg-[#84CC16] hover:bg-[#FABE4C] duration-300 rounded-lg text-white">
              <AiOutlineShoppingCart size={25} />
              <span className="pl-2">BUY NOW</span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-semibold ">More Product</h2>
        <div className="flex justify-between items-center my-3">
          {moreItems?.map((product) => {
            const { id, img, name } = product || {};
            return (
              <Link href={`products/${id}`}>
                <div className="border p-2 m-1 rounded-md shadow-md">
                  <Image height={150} width={150} src={img} alt={name} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default productDetail;
