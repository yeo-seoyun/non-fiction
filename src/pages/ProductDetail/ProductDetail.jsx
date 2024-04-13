import { useParams } from "react-router-dom";
import pb from "@/api/pocketbase";
import { useEffect, useState } from "react";
import { getPbImage } from "@/util/getPbImage";
import { Helmet } from "react-helmet-async";
import MessageCardSelect from "@/components/atom/MessageCardSelect";
import Button from "@/components/atom/Button";
import AddToCartButton from "@/components/atom/AddToCartButton";
import ProductInfo from "@/components/molecule/ProductInfo";
import ProductImage from "@/components/organisms/ProductImages";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SimpleProductCard from "@/components/molecule/SimpleProductCard";
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function ProductDetail() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  const handleSelectChange = (selectedValue) => {
    setSelectedOption(selectedValue);
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        const product = await pb.collection("product").getOne(productId);
        setProductData(product);
      } catch (error) {
        console.error("상품 정보를 가져오는 중 에러 발생:", error);
      } finally {
        setLoading(false);
      }
    }

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  useEffect(() => {
    async function fetchRecommendedProducts() {
      if (productData?.category) {
        try {
          const products = await pb.collection("product").getList(1, 10, {
            // filter: `category == "${productData?.category}" && id != "${productId}"`,
          });
          setRecommendedProducts(products.items);
        } catch (error) {
          console.error("추천 상품을 가져오는 중 에러 발생:", error);
        }
      }
    }

    fetchRecommendedProducts();
  }, [productData, productId]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!productData) {
    return <div>상품 정보가 없습니다.</div>;
  }

  const imageUrl = productData.photo
    ? getPbImage(productData.collectionId, productData.id, productData.photo[0])
    : null;

  const thumbnails =
    productData.photo?.map((photoName) => ({
      url: getPbImage(productData.collectionId, productData.id, photoName),
      alt: `${productData.title_ko} 썸네일`,
    })) || [];

  return (
    <div className="py-[9.375rem] w-full px-28 flex flex-col gap-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>NONFICTION | 상세페이지</title>
      </Helmet>
      <section className="flex items-start justify-center">
        <article className="w-[65%] md:w-[55%]">
          {imageUrl && (
            <ProductImage
              imageUrl={imageUrl}
              altText={productData.title_ko}
              thumbnails={thumbnails}
            />
          )}
        </article>

        <article className="w-[35%] flex flex-col gap-4 md:w-[45%]">
          <div>
            <h1 className="font-noto-serif font-light">{productData.title}</h1>
            <div className="flex items-center justify-between">
              <p>{productData.title_ko}</p>
              <p>{productData.price.toLocaleString()}원</p>
            </div>
            <p>{productData.description_ko}</p>
            <p>{productData.description}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p>Size</p>
            <p className="w-[6.25rem] border border-black-200 p-2 text-center">
              100ml
            </p>
          </div>
          <MessageCardSelect
            selectedOption={selectedOption}
            handleSelectChange={handleSelectChange}
          />
          <div className="flex gap-2 item-center justify-between">
            <AddToCartButton
              product={productData}
              selectedOption={selectedOption}
            />
            <Button
              className="border border-black-200 p-2 text-center hover:bg-black-200 hover:text-white"
              type="button"
              ariaLabel="선물하기"
            >
              선물하기
            </Button>
          </div>
          <ProductInfo product={productData} />
        </article>
      </section>

      <section className="flex items-start justify-center">
        <article className="w-full flex flex-col gap-5">
          <h3 className="text-2xl">추천상품</h3>
          <Swiper
            className="w-full bg-pink-200"
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
        </article>
      </section>
    </div>
  );
}

export default ProductDetail;
