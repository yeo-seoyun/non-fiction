import { useParams } from "react-router-dom";
import pb from "@/api/pocketbase";
import { useEffect, useState } from "react";
import { getPbImage, getPbImageURL } from "@/util/getPbImage";
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
      <section className="py-[9.375rem] w-full flex items-center justify-center">
        <h1>{productData.title_ko}</h1>
        {imageUrl && (
          <img src={imageUrl} alt={productData.title_ko} className="w-[20%]" />
        )}
        <p>{productData.description_ko}</p>
        {/* ... 추가 상품 정보 ... */}
      </section>
    </>
  );
}

export default ProductDetail;
