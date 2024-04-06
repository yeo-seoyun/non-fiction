// import PocketBase from "pocketbase";
import ProductCard from "@/components/molecule/ProductCard";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import pb from "@/api/pocketbase";

function Bestseller() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const records = await pb.collection("product").getFullList();

        shuffleArray(records);
        setProducts(records);
      } catch (error) {
        console.error("데이터 불러오기 실패🤯:", error);
      }
    }

    fetchProducts();
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NONFICTION | 베스트 셀러</title>
      </Helmet>
      <section className="py-[9.375rem] w-full flex items-center justify-center">
        <h2 className="sr-only">베스트 셀러</h2>

        <ul className="list-none grid grid-cols-4 gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Bestseller;
