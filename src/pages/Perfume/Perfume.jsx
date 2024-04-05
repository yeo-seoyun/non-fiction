import ProductCard from "@/components/molecule/ProductCard";
import { Helmet } from "react-helmet";
import useProductsCategory from "@/store/usePdocutsCategory";

function Perfume() {
  const products = useProductsCategory("perfume");

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
