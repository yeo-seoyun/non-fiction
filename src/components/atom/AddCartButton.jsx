const AddCartButton = ({ onAddToCart, isHovering }) => {
  return (
    <button
      className={`absolute bottom-0 w-full h-[2.188rem] flex justify-center items-center bg-white text-black opacity-0 hover:bg-black-100 hover:text-white transition-all ${
        isHovering ? "opacity-100" : ""
      } transition-opacity duration-500`}
      onClick={onAddToCart}
    >
      장바구니 담기
    </button>
  );
};

export default AddCartButton;
