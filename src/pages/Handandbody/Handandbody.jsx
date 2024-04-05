import ProductCard from "@/components/molecule/ProductCard";
import { Helmet } from "react-helmet";
import useProductsCategory from "@/store/usePdocutsCategory";

function Handandbody() {
  const products = useProductsCategory("hand&body");

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
