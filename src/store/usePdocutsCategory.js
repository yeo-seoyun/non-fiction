import { useState, useEffect } from "react";
import pb from "@/api/pocketbase";

const useProductsCategory = (category) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await pb.collection("product").getFullList();
        const filteredProducts = response.filter((product) =>
          product.category.includes(category)
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("데이터 불러오기 실패🤯:", error);
      }
    }

    fetchProducts();
  }, [category]);

  return products;
};

export default useProductsCategory;
