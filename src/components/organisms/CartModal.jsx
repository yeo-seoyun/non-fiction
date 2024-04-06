import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Button from "../atom/Button";
import CartList from "../molecule/CartList";
import { useNavigate } from "react-router-dom";

function Cart({ isOpen, onClose }) {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
    onClose();
  };

  if (!isOpen) return null;

  const handleOnCloseClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={handleOnCloseClick}
    >
      <div className="fixed top-[5.625rem] right-0 w-[535px] h-[582px] flex flex-col gap-10 p-4 border border-black-100 bg-white z-50">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">장바구니(수량)</h2>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <CartList />
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-between items-center w-full mb-4">
            <span className="text-lg font-semibold">주문금액</span>
            <span className="text-lg font-semibold">158,000원</span>
          </div>
          <Button
            className="w-full p-2 text-center bg-black-200  text-white hover:border hover:border-black-200 hover:bg-white hover:text-black-100"
            type="button"
            ariaLabel="장바구니 가기"
            onClick={goToCart}
          >
            장바구니 가기
          </Button>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Cart;
