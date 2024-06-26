import { getPbImage } from "@/util/getPbImage";
import Button from "../atom/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AddModalTable from "./AddModalTable";
import MessageCardSelect from "../atom/MessageCardSelect";
import AddToCartButton from "../atom/AddToCartButton";

const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price, 0);
};

function AddcartModal({ isOpen, onClose, product }) {
  const { title_ko, title, price, volume, photo } = product;

  const [selectedOption, setSelectedOption] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleSelectChange = (selectedValue) => {
    const newItem = {
      name: product.title,
      messageCard: selectedValue,
      price: product.price,
      quantity: 1,
    };

    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const productImage = getPbImage(
    product.collectionId,
    product.id,
    Array.isArray(photo) ? photo[0] : photo
  );

  const handleOnCloseClick = () => {
    onClose();
  };

  const handleRemoveItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((item, i) => i !== index));
  };

  const totalPrice = calculateTotalPrice(cartItems);

  return (
    <dialog
      className={`fixed w-full h-full inset-0 bg-black-100 bg-opacity-70 flex justify-center items-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
      open={isOpen}
      onClick={handleOnCloseClick}
    >
      <div
        className="bg-white overflow-hidden w-[70%] sm:w-[90%] max-h-[90%] p-4 flex flex-col gap-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2>장바구니 담기</h2>
          <button onClick={handleOnCloseClick}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="flex gap-10 sm:gap-3 item-center">
          <img src={productImage} alt={title_ko} className="w-1/3" />
          <div className="w-full flex flex-col gap-5 px-1 ">
            <div>
              <h3 className="text-xl sm:text-sm">{title}</h3>
              <span className="sm:text-sm">{title_ko}</span>,
              <span className="sm:text-sm">{volume}</span>
            </div>
            <MessageCardSelect
              selectedOption={selectedOption}
              handleSelectChange={handleSelectChange}
            />
          </div>
        </div>
        <AddModalTable cartItems={cartItems} onRemoveItem={handleRemoveItem} />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p>총 금액</p>
            <p>{totalPrice.toLocaleString()}원</p>
          </div>
          <div className="flex gap-2 item-center justify-between">
            <AddToCartButton
              product={product}
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
        </div>
      </div>
    </dialog>
  );
}

export default AddcartModal;
