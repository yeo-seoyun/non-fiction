// import { queryClient } from "./routingStart";

import Search from "@/pages/Search/Search";
import Bestseller from "@/pages/Bestseller/Bestseller";
import ComingSoon from "@/pages/ComingSoon/ComingSoon";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import SignUp from "@/pages/SignUp/SignUp";
import Perfume from "@/pages/Perfume/Perfume";
import Handandbody from "@/pages/Handandbody/Handandbody";
import Cart from "@/pages/Cart/Cart";

const navigationItems = [
  {
    id: "home",
    path: "/",
    index: true,
    text: "홈",
    element: <Home />,
    lazy: () => import("@/pages/Home/Home"),
  },
  {
    id: "login",
    path: "/login",
    text: "로그인 페이지",
    element: <Login />,
    lazy: () => import("@/pages/Login/Login"),
  },
  {
    id: "signup",
    path: "/signup",
    text: "회원가입 페이지",
    element: <SignUp />,
    lazy: () => import("@/pages/SignUp/SignUp"),
  },
  {
    id: "cart",
    path: "/cart",
    text: "장바구니 페이지",
    element: <Cart />,
    lazy: () => import("@/pages/Cart/Cart"),
  },
  {
    id: "search",
    path: "/search",
    text: "상품 검색 페이지",
    element: <Search />,
    lazy: () => import("@/pages/Search/Search"),
  },
  {
    id: "bestseller",
    path: "/bestseller",
    text: "베스트 셀러",
    element: <Bestseller />,
    lazy: () => import("@/pages/Bestseller/Bestseller"),
  },
  {
    id: "perfume",
    path: "/perfume",
    element: <Perfume />,
    text: "향수",
    lazy: () => import("@/pages/Perfume/Perfume"),
  },
  {
    id: "handandbody",
    path: "/handandbody",
    element: <Handandbody />,
    text: "핸드 앤 바디",
    lazy: () => import("@/pages/Handandbody/Handandbody"),
  },
  {
    id: "homefragrance",
    path: "/comingsoon",
    text: "홈 프래그란스",
    element: <ComingSoon />,
  },
  {
    id: "giftset",
    path: "/comingsoon",
    text: "선물 세트",
    element: <ComingSoon />,
  },
  {
    id: "about",
    path: "/comingsoon",
    text: "정보",
    element: <ComingSoon />,
  },
];

export default navigationItems;
