import PropTypes from "prop-types";
import { getPbImage } from "@/util/getPbImage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddCartButton from "../atom/AddCartButton";
import AddcartModal from "./AddCartModal";

function ProductCard({ product }) {
  const { title_ko, title, price, volume, description_ko, photo, category } =
    product;
  const [hover, setHover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const goToProductDetail = () => {
    navigate(`/ProductDetail/${product.id}`);
  };

  const handleAddToCartClick = (event) => {
    event.stopPropagation();
    setShowModal(true);
  };

  const handleCloseModal = () => {
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
    <div onClick={goToProductDetail} className="block w-full cursor-pointer">
      <li
        className="w-full flex flex-col justify-between items-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <figure className="w-full relative m-0" style={{ paddingTop: "100%" }}>
          <img
            src={defaultImage}
            alt={title_ko}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500  ${
              hover ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={hoverImage}
            alt={title_ko}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              hover ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* "장바구니 담기" 버튼 */}
          <AddCartButton
            onAddToCart={(event) => {
              event.stopPropagation();
              handleAddToCartClick(event);
            }}
            isHovering={hover}
          />
          <AddcartModal
            isOpen={showModal}
            onClose={handleCloseModal}
            product={product}
          />
        </figure>
        <figcaption className="w-full flex flex-col gap-4 p-2">
          <div>
            <p className="hidden">{category[0]}</p>
            <div className="flex justify-between items-center">
              <p>{title_ko}</p>
              <p>{price.toLocaleString()}원</p>
            </div>
            <div>
              <span>{title}</span>,<span>{volume}</span>
            </div>
          </div>
          <p className="text-sm">{description_ko}</p>
        </figcaption>
      </li>
    </div>
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
    category: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProductCard;
