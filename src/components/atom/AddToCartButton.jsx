import Button from "@/components/atom/Button";
import pb from "@/api/pocketbase";

const AddToCartButton = ({ product, selectedOption }) => {
  const addToCart = async () => {
    try {
      const createdItem = await pb.records.create("cart", {
        title: product.title,
        price: product.price,
        volume: product.volume,
        photo: product.photo,
        messageCard: selectedOption,
      });

      console.log("추가된 아이템:", createdItem);
      // 장바구니 추가 성공 메시지 표시
    } catch (error) {
      console.error("장바구니에 추가하는데 실패했습니다:", error);
      // 장바구니 추가 실패 메시지 표시
    }
  };

  return (
    <Button
      className="p-2 flex-1 text-center bg-black-200 text-white hover:border hover:border-black-200 hover:bg-white hover:text-black-100"
      type="button"
      ariaLabel="장바구니 담기"
      onClick={addToCart}
    >
      장바구니 담기
    </Button>
  );
};

export default AddToCartButton;
