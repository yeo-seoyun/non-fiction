import ProductCard from "@/components/molecule/ProductCard";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";

function Perfume() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const pb = new PocketBase("https://seoyunpf.pockethost.io");

      try {
        const records = await pb
          .collection("product")
          .getFullList({}, { sort: "-created" });
        setProducts(records);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NONFICTION | 퍼퓸</title>
      </Helmet>
      <section className="py-[9.375rem] w-full flex items-center justify-center">
        <h2 className="sr-only">퍼퓸</h2>
        <ul className="list-none grid grid-cols-4 gap-12">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Perfume;
