import ProductCard from "@/components/molecule/ProductCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PocketBase from "pocketbase";

function Handandbody() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const pb = new PocketBase("https://seoyunpf.pockethost.io");

      try {
        const response = await pb.collection("product").getFullList();

        const filteredProducts = response.filter((product) =>
          product.category.includes("hand&body")
        );
        setProducts(filteredProducts);

        // console.log(filteredProducts);
      } catch (error) {
        console.error("데이터 불러오기 실패🤯:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NONFICTION | 핸드앤바디</title>
      </Helmet>
      <section className="py-[9.375rem] w-full flex items-center justify-center">
        <h2 className="sr-only">핸드앤바디</h2>
        <ul className="list-none grid grid-cols-4 gap-12">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Handandbody;
