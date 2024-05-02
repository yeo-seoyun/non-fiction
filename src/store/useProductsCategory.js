import { useState, useEffect } from "react";
import pb from "@/api/pocketbase";

function useProductsCategory(category) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await pb.collection("product").getFullList();
        if (isMounted) {
          const filteredProducts = response.filter((product) =>
            product.category.includes(category)
          );
          setProducts(filteredProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, [category]);

  return { loading, products };
}

export default useProductsCategory;
