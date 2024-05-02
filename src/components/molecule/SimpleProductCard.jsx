import PropTypes from "prop-types";
import { getPbImage } from "@/util/getPbImage";
import { useNavigate } from "react-router-dom";

function SimpleProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ProductDetail/${product.id}`);
  };

  const imageUrl = getPbImage(
    product.collectionId,
    product.id,
    Array.isArray(product.photo) ? product.photo[0] : product.photo
  );

  return (
    <div onClick={handleClick} className="cursor-pointer text-center">
      <div
        className="inline-block relative"
        style={{ width: "100%", paddingBottom: "100%" }}
      >
        <img
          src={imageUrl}
          alt={product.title_ko}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex sm:flex-col items-center justify-between lg:text-base md:text-sm">
        <h3 className="sm:text-xs">{product.title_ko}</h3>
        <p className="text-sm sm:text-xs">{`${product.price.toLocaleString()}원`}</p>
      </div>
    </div>
  );
}

SimpleProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title_ko: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    photo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    collectionId: PropTypes.string.isRequired,
  }).isRequired,
};

export default SimpleProductCard;
