import SearchInput from "@/components/atom/SearchInput";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import ProductCard from "@/components/molecule/ProductCard";

function Search() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const pb = new PocketBase("https://seoyunpf.pockethost.io");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await pb.collection("product").getFullList();
        setProducts(response);
      } catch (error) {
        console.error("상품 데이터를 가져오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchProducts();
  }, []);

  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = (query) => {
    setIsSearched(true);

    if (!query.trim()) {
      setFilteredProducts(products);
      return;
    }

    const queryLower = query.toLowerCase();
    const result = products.filter((product) => {
      return Object.values(product).some((value) => {
        return String(value).toLowerCase().includes(queryLower);
      });
    });

    setFilteredProducts(result);
  };

  const sectionHeightClass =
    filteredProducts.length > 0 || isSearched ? "h-auto" : "h-screen";

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NONFICTION | 검색</title>
      </Helmet>
      <section
        className={`py-[9.375rem] w-full flex flex-col gap-10 items-center justify-center ${sectionHeightClass}`}
      >
        <h2 className="sr-only">검색</h2>
        <SearchInput onSearch={handleSearch} />
        <ul className="list-none grid grid-cols-4 gap-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Search;
