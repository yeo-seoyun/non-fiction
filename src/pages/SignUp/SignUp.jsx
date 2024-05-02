import SignUpForm from "@/components/organisms/SignUpForm";
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
        <div className="w-[30rem] sm:w-full">
          <SignUpForm />
        </div>
      </section>
    </>
  );
}

export default SignUp;
