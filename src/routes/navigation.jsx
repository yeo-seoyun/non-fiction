// import { queryClient } from "./routingStart";

import Home from "@/pages/Home/Home";

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
    text: "로그인 화면",
    lazy: () => import("@/pages/Login/Login"),
  },
  {
    id: "register",
    path: "/register",
    text: "회원가입 화면",
    // lazy: () => import('@/pages/Register'),
  },
  {
    id: "bestseller",
    path: "/bestseller",
    text: "베스트 셀러",
  },
  {
    id: "perfume",
    path: "/perfume",
    text: "향수",
  },
  {
    id: "handandbody",
    path: "/products/handandbody",
    text: "핸드 앤 바디",
  },
  {
    id: "homefragrance",
    path: "/products/homefragrance",
    text: "홈 프래그런스",
  },
  {
    id: "giftset",
    path: "/products/giftset",
    text: "기프트 세트",
  },
  {
    id: "about",
    path: "/products/about",
    text: "회사소개",
  },
];

export default navigationItems;
