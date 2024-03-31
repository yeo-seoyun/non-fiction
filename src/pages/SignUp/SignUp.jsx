import Button from "@/components/atom/Button";
import { Helmet } from "react-helmet";

function SignUp() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NONFICTION | 회원가입</title>
      </Helmet>
      <section className="w-full py-[9.375rem] flex flex-col gap-24 items-center justify-center">
        <h2 className="text-3xl">회원가입</h2>
        <div className="flex flex-col gap-12 w-[30rem]">
          <div>{/* 회원가입 input */}</div>
          <div className="flex flex-col gap-4 justify-center">
            <Button
              className="border border-black-200 p-2 text-center hover:bg-black-200 hover:text-white"
              type="button"
              ariaLabel="회원가입"
            >
              회원가입
            </Button>
            <Button
              className="border border-black-200 p-2 text-center hover:bg-black-200 hover:text-white"
              type="button"
              ariaLabel="카카오톡으로 회원가입"
            >
              카카오톡으로 가입하기
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
