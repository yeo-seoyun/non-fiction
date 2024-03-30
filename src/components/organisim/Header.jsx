import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <header className="w-full h-[90px] px-8 flex items-center justify-between text-xl font-noto-serif font-light bg-white bg-opacity-70 shadow-default fixed z-30">
      <Link to="/" className="bg-nf-logo w-[60px] h-[60px] bg-contain"></Link>
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
        <button
          type="button"
          aria-label="검색"
          className="bg-search-icon w-[29px] h-[25px] bg-contain"
          onClick={handleSearchClick}
        />
        <button
          type="button"
          aria-label="나의정보"
          className="bg-account-icon w-[29px] h-[25px] bg-contain"
        />
        <button
          type="button"
          aria-label="장바구니"
          className="bg-cart-icon w-[29px] h-[25px] bg-contain"
        />
      </div>
    </header>
  );
}

export default Header;
