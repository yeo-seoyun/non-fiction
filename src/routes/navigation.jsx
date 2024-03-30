// import { queryClient } from "./routingStart";

import ComingSoon from "@/pages/ComingSoon/ComingSoon";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";

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
    id: "register",
    path: "/register",
    text: "회원가입 페이지",
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
    path: "/handandbody",
    text: "핸드 앤 바디",
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
