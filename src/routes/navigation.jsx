// import { queryClient } from "./routingStart";

import Home from "@/pages/Home/Home";

const navigationItems = [
  {
    id: "home",
    path: "/",
    index: true,
    text: "Ȩ",
    element: <Home />,
    lazy: () => import("@/pages/Home/Home"),
  },
  {
    id: "login",
    path: "/login",
    text: "�α��� ȭ��",
    lazy: () => import("@/pages/Login/Login"),
  },
  {
    id: "register",
    path: "/register",
    text: "ȸ������ ȭ��",
    // lazy: () => import('@/pages/Register'),
  },
  {
    id: "bestseller",
    path: "/bestseller",
    text: "����Ʈ ����",
  },
  {
    id: "perfume",
    path: "/perfume",
    text: "���",
  },
  {
    id: "handandbody",
    path: "/products/handandbody",
    text: "�ڵ� �� �ٵ�",
  },
  {
    id: "homefragrance",
    path: "/products/homefragrance",
    text: "Ȩ �����׷���",
  },
  {
    id: "giftset",
    path: "/products/giftset",
    text: "����Ʈ ��Ʈ",
  },
  {
    id: "about",
    path: "/products/about",
    text: "ȸ��Ұ�",
  },
];

export default navigationItems;
