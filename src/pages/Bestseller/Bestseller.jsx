import ProductCard from "@/components/molecule/ProductCard";
import ProductSkeleton from "@/components/molecule/ProductSkeleton";
import { Helmet } from "react-helmet";
import pb from "@/api/pocketbase";
import { useEffect, useState } from "react";

function Bestseller() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const maxProductCount = 8;

  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      setLoading(true);
      try {
        const records = await pb.collection("product").getFullList();
        if (isMounted) {
          setProducts(records);
        }
      } catch (error) {
        if (isMounted) {
          console.error("데이터 불러오기 실패🤯:", error);
        }
      }
      if (isMounted) {
        setLoading(false);
      }
    }

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NONFICTION | 베스트 셀러</title>
      </Helmet>
      <section className="py-[9.375rem] w-full flex items-center justify-center">
        <h2 className="sr-only">베스트 셀러</h2>
        <ul className="list-none w-[80%] grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12">
          {loading
            ? Array.from({
                length: Math.max(products.length, maxProductCount),
              }).map((_, index) => <ProductSkeleton key={index} />)
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </ul>
      </section>
    </>
  );
}

export default Bestseller;
