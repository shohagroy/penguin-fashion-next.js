import Image from "next/image";
import Link from "next/link";

const Card = ({ product }) => {
  const { id, name, price, img } = product || {};
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg">
      <div className="p-6 bg-gray-200 rounded-xl">
        <Image src={img} alt={name} width={300} height={400} />
      </div>

      <div className="py-3">
        <h3 className="font-bold text-xl">{name}</h3>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="flex justify-between items-center">
          <p className="text-[#FABE4C] font-bold text-xl">${price}</p>

          <Link href={`products/${id}`}>
            <button className=" flex font-bold px-2 py-1 bg-[#84CC16] hover:bg-[#FABE4C] duration-300 rounded-lg text-white">
              {/* <AiOutlineShoppingCart size={20} /> */}
              <span className="pl-2">See All</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
