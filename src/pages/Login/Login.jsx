// import React from "react";

import LoginForm from "@/components/organisms/LoginForm";
import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NONFICTION | 로그인</title>
      </Helmet>
      <section className="w-full py-[9.375rem] flex flex-col gap-24 items-center justify-center">
        <h2 className="text-3xl">로그인</h2>
        <div className="w-[30rem] sm:w-full">
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default Login;
