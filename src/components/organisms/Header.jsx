import useLoginFormStore from "@/store/useLoginFormStore";
import { Link } from "react-router-dom";
import ProductHeader from "./ProductHeader";
import { useState } from "react";
import Cart from "./CartModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { isLoggedIn } = useLoginFormStore();

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const openCategoryModal = () => setCategoryModalOpen(true);
  const closeCategoryModal = () => setCategoryModalOpen(false);

  const handleLinkClick = (e) => {
    closeCategoryModal();
  };

  return (
    <>
      <div className="w-full shadow-default fixed z-30 bg-white bg-opacity-70">
        <header className="w-full px-4 h-[5.625rem] flex items-center justify-between text-xl font-noto-serif font-light">
          <button
            className="lg:hidden bg-bar-icon w-[1.813rem] h-[1.563rem] bg-contain"
            onClick={openCategoryModal}
          ></button>
          {isCategoryModalOpen && (
            <div className="fixed inset-0 z-50 bg-white p-12">
              <div className="w-full h-full flex flex-col gap-8">
                <div className="flex justify-end">
                  <button onClick={closeCategoryModal} className="p-2 text-2xl">
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
                <div className="flex flex-col gap-12">
                  <ul className="space-y-6 text-3xl">
                    <li>
                      <Link
                        to="/bestseller"
                        aria-label="베스트 셀러"
                        className="hover hover:text-gray-100"
                        onClick={handleLinkClick}
                      >
                        Best Seller
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/perfume"
                        aria-label="향수"
                        className="hover hover:text-gray-100"
                        onClick={handleLinkClick}
                      >
                        Perfume
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/handandbody"
                        aria-label="핸드 앤 바디"
                        className="hover hover:text-gray-100"
                        onClick={handleLinkClick}
                      >
                        Hand & Body
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/comingsoon"
                        aria-label="홈 프래그런스"
                        className="hover hover:text-gray-100"
                        onClick={handleLinkClick}
                      >
                        Home Fragrance
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/comingsoon"
                        aria-label="선물 세트"
                        className="hover hover:text-gray-100"
                        onClick={handleLinkClick}
                      >
                        Gift Set
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/comingsoon"
                        aria-label="정보"
                        className="hover hover:text-gray-100"
                        onClick={handleLinkClick}
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                  <div className="space-y-2">
                    <Link
                      to="/comingsoon"
                      aria-label="마이 페이지"
                      onClick={handleLinkClick}
                    >
                      My Page
                    </Link>
                    <ul className="flex gap-2">
                      <li>
                        <Link
                          to="/login"
                          aria-label="로그인"
                          onClick={handleLinkClick}
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <span>/</span>
                      </li>
                      <li>
                        <Link
                          to="/signup"
                          aria-label="로그인"
                          onClick={handleLinkClick}
                        >
                          Join
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          <Link
            to="/"
            className="flex items-center lg:bg-nf-logo bg-nfh-logo w-[3.75rem] h-[3.75rem] bg-contain bg-no-repeat bg-center"
          />

          <nav className="hidden lg:flex gap-8">
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
            />
            {!isLoggedIn && (
              <Link
                to="/login"
                aria-label="나의정보"
                className="bg-account-icon w-[1.813rem] h-[1.563rem] bg-contain"
              />
            )}
            <button
              type="button"
              aria-label="장바구니"
              className="bg-cart-icon w-[1.813rem] h-[1.563rem] bg-contain"
              onClick={openModal}
            />
          </div>
        </header>
        <ProductHeader />
      </div>
      <Cart isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Header;
