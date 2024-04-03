import { categoryState } from "@/store/stores";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCategoryNames } from "@/store/useCategoryNames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function ProductHeader() {
  const location = useLocation();
  const [category, setCategory] = useAtom(categoryState);

  useEffect(() => {
    const newCategory = useCategoryNames[location.pathname];
    if (newCategory && category !== newCategory) {
      setCategory(newCategory);
    }
  }, [location.pathname, setCategory, category]);

  if (!Object.keys(useCategoryNames).includes(location.pathname)) {
    return null;
  }
  return (
    <div className="w-full h-[2.5rem] px-8 flex justify-between items-center">
      <div>{category}</div>
      <div className="flex gap-1 items-center">
        <FontAwesomeIcon icon={faFilter} className="text-black-200" />
        필터
      </div>
    </div>
  );
}

export default ProductHeader;
