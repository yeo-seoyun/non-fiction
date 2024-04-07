import { useParams } from "react-router-dom";
import pb from "@/api/pocketbase";
import { useEffect, useState } from "react";
import { getPbImage } from "@/util/getPbImage";
import { Helmet } from "react-helmet-async";

function ProductDetail() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [isLoading, setLoading] = useState(true);

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

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!productData) {
    return <div>상품 정보가 없습니다.</div>;
  }

  const imageUrl = productData.photo
    ? getPbImage(productData.collectionId, productData.id, productData.photo[0])
    : null;

  console.log(imageUrl);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NONFICTION | 상세페이지</title>
      </Helmet>
      <section className="py-[9.375rem] w-full px-28 flex items-center justify-center bg-slate-400">
        <div className="bg-purple-300 flex-1">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={productData.title_ko}
              className="w-[70%]"
            />
          )}
        </div>
        <div className="bg-pink-500 flex-1">
          <h1 className="font-noto-serif font-light">{productData.title}</h1>
          <div className="flex items-center justify-between">
            <p>{productData.title_ko}</p>
            <p>{productData.price.toLocaleString()}원</p>
          </div>
          <p>{productData.description_ko}</p>
          <p>{productData.description}</p>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
