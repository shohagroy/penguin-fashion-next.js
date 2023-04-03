import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <section className="bg-[#FFFBF0] p-3">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center">
        <div>
          <Image src={Logo} width={250} />
        </div>

        <div>
          <Link className="p-4  font-semibold" href={"/"}>
            Home
          </Link>
          <Link className="p-4  font-semibold" href={"/"}>
            Product
          </Link>
          <Link className="p-4  font-semibold" href={"/"}>
            About Us
          </Link>
          <Link className="p-4  font-semibold" href={"/"}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
