import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SimpleProductCard from "@/components/molecule/SimpleProductCard";
import { useEffect, useState } from "react";
import pb from "@/api/pocketbase";

function RecommendedProducts({ currentProductId, currentCategory }) {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  // filter 수정 필요
  useEffect(() => {
    async function fetchRecommendedProducts() {
      if (currentCategory) {
        try {
          const filterQuery = encodeURIComponent(
            `category == '${currentCategory}' && id != '${currentProductId}'`
          );
          const response = await pb.collection("product").getList(1, 10, {
            // filter: filterQuery,
          });
          setRecommendedProducts(response.items);
        } catch (error) {
          console.error("추천 상품을 가져오는 중 에러 발생: ", error);
        }
      }
    }

    fetchRecommendedProducts();
  }, [currentCategory, currentProductId]);

  return (
    <>
      <h3 className="text-2xl">추천상품</h3>
      <Swiper
        className="w-full"
        spaceBetween={30}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {recommendedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <SimpleProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default RecommendedProducts;
