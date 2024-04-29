import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/main.css";
import "./styles/tailwind.css";
import "./styles/normalize.css";
import routes from "./routes/index"; // 라우트 설정을 가져옵니다.

// Vite 환경 변수에서 PUBLIC_URL을 가져옵니다. 만약 없다면 기본값으로 '/'를 사용합니다.
const basename = import.meta.env.VITE_PUBLIC_URL || "/";

// 라우터 설정에서 basename을 적용합니다.
const router = createBrowserRouter(routes, { basename });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
