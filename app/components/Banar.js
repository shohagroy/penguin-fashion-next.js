import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

import ModelPictire from "../assets/model.png";

const Banar = () => {
  return (
    <section className="max-w-[1240px] mx-auto">
      <div className="flex justify-between items-center p-4">
        <div>
          <h2 className="text-4xl font-bold text-[#FABE4C]">
            BE THE PENGUINS <br /> <span className="text-black">OF WINTER</span>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <button className="uppercase my-6 flex font-bold py-3 px-6 bg-[#84CC16] hover:bg-[#FABE4C] duration-300 rounded-lg text-white">
            <AiOutlineShoppingCart size={25} />
            <span className="pl-2">buy now</span>
          </button>
        </div>
        <div>
          <Image src={ModelPictire} width={500} alt={"model"} />
        </div>
      </div>
    </section>
  );
};

export default Banar;
