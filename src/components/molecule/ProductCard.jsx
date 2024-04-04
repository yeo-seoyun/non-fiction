import PropTypes from "prop-types";
import { getPbImage } from "@/util/getPbImage";
import { useState } from "react";
import AddCartButton from "../atom/AddCartButton";
import AddcartModal from "./AddCartModal";

function ProductCard({ product }) {
  const { title_ko, title, price, volume, description_ko, photo } = product;
  const [hover, setHover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCartClick = () => {
    // "장바구니 담기" 버튼 클릭시 모달을 표시합니다.
    setShowModal(true);
  };

  const handleCloseModal = () => {
    // 모달의 닫기 버튼 클릭시 모달을 숨깁니다.
    setShowModal(false);
  };

  const defaultImage = getPbImage(
    product.collectionId,
    product.id,
    Array.isArray(photo) ? photo[0] : photo
  );

  const hoverImage =
    Array.isArray(photo) && photo.length > 1
      ? getPbImage(product.collectionId, product.id, photo[1])
      : defaultImage;

  return (
    <li
      className="w-[20rem] h-[26.25rem] flex flex-col justify-between items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <figure className="w-full h-full relative m-0">
        {/* 기본 이미지 */}
        <img
          src={defaultImage}
          alt={title_ko}
          className={`absolute inset-0 w-full h-[20rem] transition-opacity duration-500 object-contain ${
            hover ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* 호버 이미지 */}
        <img
          src={hoverImage}
          alt={title_ko}
          className={`absolute inset-0 w-[20rem] h-[20rem] transition-opacity duration-500 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* "장바구니 담기" 버튼 */}
        <AddCartButton onAddToCart={handleAddToCartClick} isHovering={hover} />
        <AddcartModal
          show={showModal}
          onClose={handleCloseModal}
          product={product}
        />
      </figure>
      <figcaption className="w-full flex flex-col gap-4 p-2">
        <div>
          <div className="flex justify-between items-center">
            <p>{title_ko}</p>
            <p>{price}</p>
          </div>
          <div>
            <span>{title}</span>,<span>{volume}</span>
          </div>
        </div>
        <p className="text-sm">{description_ko}</p>
      </figcaption>
    </li>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title_ko: PropTypes.string.isRequired,
    title: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    volume: PropTypes.arrayOf(PropTypes.string),
    description_ko: PropTypes.string,
    photo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }).isRequired,
};

export default ProductCard;
