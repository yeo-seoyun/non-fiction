import ProductCard from "@/components/molecule/ProductCard";
import { Helmet } from "react-helmet";

function Bestseller() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NONFICTION | 베스트 셀러</title>
      </Helmet>
      <section className="py-[9.375rem]">
        <h2 className="sr-only">베스트 셀러</h2>
        <div>
          <ProductCard />
        </div>
      </section>
    </>
  );
}

export default Bestseller;
