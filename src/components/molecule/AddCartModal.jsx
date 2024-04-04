import { getPbImage } from "@/util/getPbImage";
import Input from "../atom/Input";
import Button from "../atom/Button";

function AddcartModal({ isOpen, onClose, product }) {
  const { title_ko, title, price, volume, photo } = product;

  const productImage = getPbImage(
    product.collectionId,
    product.id,
    Array.isArray(photo) ? photo[0] : photo
  );

  const handleOnCloseClick = () => {
    onClose();
  };

  return (
    <dialog
      className={`fixed w-full h-full inset-0 bg-black-100 bg-opacity-70 flex justify-center items-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
      open={isOpen}
      onClick={handleOnCloseClick}
    >
      <div
        className="bg-white overflow-hidden w-[30%] p-4 flex flex-col gap-7"
        onClick={(e) => e.stopPropagation()} // 모달 내부에서 클릭 이벤트가 오버레이로 전파되는 것을 방지
      >
        <div className="flex justify-between items-center">
          <h2>장바구니 담기</h2>
          <button onClick={handleOnCloseClick}>X</button>
        </div>
        <div className="flex gap-10 item-center">
          <img src={productImage} alt={title_ko} className="w-1/2" />
          <div className="flex flex-col gap-5">
            <div>
              <p>{title}</p>
              <span>{title_ko}</span>,<span>{volume}</span>
            </div>
            <div>
              <p>메세지카드</p>
              <Input />
            </div>
            <div>
              <p>각인문구 신청(선택)</p>
              <Input />
            </div>
          </div>
        </div>
        <div>
          <span>물건 추가</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p>총 금액</p>
            <p>금액합계</p>
          </div>
          <div className="flex gap-2 item-center justify-between">
            <Button
              className="p-2 flex-1 text-center bg-black-200 text-white hover:border hover:border-black-200 hover:bg-white hover:text-black-100"
              type="button"
              ariaLabel="장바구니 담기"
            >
              장바구니 담기
            </Button>
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
