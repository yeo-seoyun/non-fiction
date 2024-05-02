function ProductSkeleton() {
  return (
    <div className="block w-full cursor-pointer">
      <li className="w-full flex flex-col justify-between items-center">
        <div className="w-[325px] h-[325px] bg-gray-300 animate-pulse"></div>
        <div className="w-full flex flex-col gap-4 p-2">
          <div className="flex justify-between items-center w-full">
            <div className="h-6 bg-gray-200 rounded-md w-[60%] animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-md w-[30%] animate-pulse"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
        </div>
      </li>
    </div>
  );
}

export default ProductSkeleton;
