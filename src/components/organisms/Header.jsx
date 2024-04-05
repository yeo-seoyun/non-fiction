import useLoginFormStore from "@/store/useLoginFormStore";
import { Link } from "react-router-dom";
import ProductHeader from "./ProductHeader";

function Header() {
  const { isLoggedIn } = useLoginFormStore();

  return (
    <div className="w-full shadow-default fixed z-30 bg-white bg-opacity-70">
      <header className="w-full h-[5.625rem] px-8 flex items-center justify-between text-xl font-noto-serif font-light">
        <Link
          to="/"
          className="bg-nf-logo w-[3.75rem] h-[3.75rem] bg-contain bg-no-repeat"
        ></Link>
        <nav className="flex gap-8">
          <Link
            to="/bestseller"
            aria-label="베스트 셀러"
            className="hover hover:text-gray-100"
          >
            Best Seller
          </Link>
          <Link
            to="/perfume"
            aria-label="향수"
            className="hover hover:text-gray-100"
          >
            Perfume
          </Link>
          <Link
            to="/handandbody"
            aria-label="핸드 앤 바디"
            className="hover hover:text-gray-100"
          >
            Hand & Body
          </Link>
          <Link
            to="/comingsoon"
            aria-label="홈 프래그런스"
            className="hover hover:text-gray-100"
          >
            Home Fragrance
          </Link>
          <Link
            to="/comingsoon"
            aria-label="선물 세트"
            className="hover hover:text-gray-100"
          >
            Gift Set
          </Link>
          <Link
            to="/comingsoon"
            aria-label="정보"
            className="hover hover:text-gray-100"
          >
            About
          </Link>
        </nav>
        <div className="flex gap-1">
          <Link
            to="/search"
            aria-label="검색"
            className="bg-search-icon w-[1.813rem] h-[1.563rem] bg-contain"
          ></Link>
          {!isLoggedIn && (
            <Link
              to="/login"
              aria-label="나의정보"
              className="bg-account-icon w-[1.813rem] h-[1.563rem] bg-contain"
            ></Link>
          )}
          <button
            type="button"
            aria-label="장바구니"
            className="bg-cart-icon w-[1.813rem] h-[1.563rem] bg-contain"
          />
        </div>
      </header>
      <ProductHeader />
    </div>
  );
}

export default Header;
