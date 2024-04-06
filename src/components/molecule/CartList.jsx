function CartList() {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto p-4">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center">
          <img
            src="path_to_your_product_image"
            alt="Product"
            className="w-20 h-20 object-cover mr-4"
          />
          <div>
            <h3 className="font-semibold">SANTAL CREAM Perfume 100ml</h3>
            <p className="text-sm text-gray-500">Thank you</p>
          </div>
        </div>
        <p className="font-semibold">158,000원</p>
      </div>
    </div>
  );
}

export default CartList;
