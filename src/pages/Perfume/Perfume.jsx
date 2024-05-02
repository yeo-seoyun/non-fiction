import ProductCard from "@/components/molecule/ProductCard";
import { Helmet } from "react-helmet";
import useProductsCategory from "@/store/useProductsCategory";
import ProductSkeleton from "@/components/molecule/ProductSkeleton";

function Perfume() {
  const { products, loading } = useProductsCategory("perfume");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NONFICTION | 퍼퓸</title>
      </Helmet>
      <section className="py-[9.375rem] w-full flex items-center justify-center">
        <h2 className="sr-only">퍼퓸</h2>
        <ul className="list-none w-[80%] grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))
            : (products || []).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </ul>
      </section>
    </>
  );
}

export default Perfume;
