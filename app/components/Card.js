import Image from "next/image";
import Image1 from "../assets/product/jacket-1.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Card = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg">
      <div className="p-6 bg-gray-200 rounded-xl">
        <Image src={Image1} />
      </div>

      <div className="py-3">
        <h3 className="font-bold text-xl">Yellow Coat Jacket</h3>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="flex justify-between items-center">
          <p className="text-[#FABE4C] font-bold text-xl">$234</p>

          <button className="uppercase flex font-bold px-2 py-1 bg-[#84CC16] hover:bg-[#FABE4C] duration-300 rounded-lg text-white">
            <AiOutlineShoppingCart size={20} />
            <span className="pl-2">buy now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;