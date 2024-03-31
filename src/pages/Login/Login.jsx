// import React from "react";

import Button from "@/components/atom/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full py-[9.375rem] flex flex-col gap-24 items-center justify-center">
      <h2 className="text-3xl">로그인</h2>
      <div className="flex flex-col gap-12 w-[30rem]">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <Link
              to="/comingsoon"
              aria-label="아이디 찾기"
              className="font-bold"
            >
              아이디
            </Link>
            <span>/</span>
            <Link
              to="/comingsoon"
              aria-label="비빌번호 찾기"
              className="font-bold"
            >
              비밀번호
            </Link>
            <span>찾기</span>
          </div>
          <Link to="/register" aria-label="회원가입" className="font-bold">
            회원가입
          </Link>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <Button
            className="border border-black-200 p-2 text-center hover:bg-black-200 hover:text-white"
            type="button"
            ariaLabel="로그인"
          >
            로그인
          </Button>
          <Button
            className="border border-black-200 p-2 text-center hover:bg-black-200 hover:text-white"
            type="button"
            ariaLabel="카카오톡으로 로그인"
          >
            카카오톡으로 로그인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
