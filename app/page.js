import Banar from "./components/Banar";
import CategoryProducts from "./components/CategoryProducts";
import { products } from "./db/products";

export default function Home() {
  console.log(products);

  const menSneakers = products.filter(
    (sneakers) => sneakers.category === "Men's Sneaker"
  );

  const menPants = products.filter(
    (sneakers) => sneakers.category === "Men's Pants"
  );

  const menBoots = products.filter(
    (sneakers) => sneakers.category === "Men's Boot"
  );

  const bag = products.filter((sneakers) => sneakers.category === "Bag");
  const cap = products.filter((sneakers) => sneakers.category === "Cap");
  const earphones = products.filter(
    (sneakers) => sneakers.category === "Earphones"
  );
  const bottles = products.filter((sneakers) => sneakers.category === "Bottle");

  return (
    <main>
      <Banar />
      <CategoryProducts products={menPants} category={"Men's Pants"} />
      <CategoryProducts products={menSneakers} category={"Men's Sneaker"} />
      <CategoryProducts products={menBoots} category={"Men's Boot"} />
      <CategoryProducts products={bag} category={"Bag"} />
      <CategoryProducts products={cap} category={"Cap"} />
      <CategoryProducts products={earphones} category={"Earphones"} />
      <CategoryProducts products={bottles} category={"Bottle"} />
    </main>
  );
}
