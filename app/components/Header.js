import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";

const Header = async () => {
  return (
    <section className="bg-[#FFFBF0] p-3">
      <div className="max-w-[1240px] mx-auto my-5 flex justify-between items-center">
        <Link href={"/"}>
          <Image src={Logo} width={250} alt={"logo"} />
        </Link>

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
