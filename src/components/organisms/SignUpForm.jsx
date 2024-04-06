import Button from "@/components/atom/Button";
import EmailComponent from "../molecule/EmailComponent";
import PasswordComponent from "../molecule/PasswordComponent";
import { useAtom } from "jotai";
import { emailAtom, emailValidAtom, passwordAtom } from "@/store/stores";
import { emailReg } from "@/util/utils";
import Input from "../atom/Input";
import { useState } from "react";
import PhoneNumberComponent from "../molecule/PhoneNumberComponent";
import pb from "@/api/pocketbase";
import PasswordConfirmComponent from "../molecule/PasswordContirmComponent";

function SignUpForm() {
  const [emailValue, setEmailValue] = useAtom(emailAtom);
  const [emailValidValue, setEmailValid] = useAtom(emailValidAtom);
  const [passwordValue, setPasswordValue] = useAtom(passwordAtom);
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      !emailValidValue ||
      passwordValue.length === 0 ||
      passwordValue !== confirmPasswordValue
    ) {
      alert(
        "유효하지 않은 이메일 혹은 비밀번호이거나 비밀번호가 일치하지 않습니다."
      );
      return;
    }

    try {
      const response = await pb.users.create({
        email: emailValue,
        password: passwordValue,
      });
      console.log("회원가입 성공", response);
      // 성공 후 처리 로직 추가
    } catch (error) {
      console.error("회원가입 실패", error);
      // 오류 처리 로직 추가
    }
  }

  return (
    <>
      <form
        id="signup-form"
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 justify-center"
      >
        <Input
          id="name"
          type="name"
          labelText="이름"
          placeholder="이름"
          className="p-2 border border-gray-200"
        />
        <EmailComponent
          handleInputChange={(e) => {
            const email = e.target.value;
            setEmailValue(email);
            setEmailValid(emailReg(email));
          }}
          error={!emailValidValue}
        />
        <PasswordComponent
          id="password"
          labelText="비밀번호"
          handleInputChange={(e) => setPasswordValue(e.target.value)}
          value={passwordValue}
          placeholder="비밀번호"
        />
        <PasswordConfirmComponent
          id="confirm-password"
          labelText="비밀번호 확인"
          handleInputChange={(e) => setConfirmPasswordValue(e.target.value)}
          value={confirmPasswordValue}
          placeholder="비밀번호 확인"
        />
        <PhoneNumberComponent />
        {/* 회원가입 버튼 */}
        <div className="flex flex-col gap-4 justify-center pt-5">
          <Button
            className="border border-black-200 p-2 text-center hover:bg-black-200 hover:text-white"
            type="submit"
            ariaLabel="회원가입"
          >
            회원가입
          </Button>
          <Button
            className="border border-black-200 p-2 text-center hover:bg-black-200 hover:text-white"
            type="button"
            ariaLabel="카카오톡으로 회원가입"
            // 카카오톡 회원가입 로직을 추가
          >
            카카오톡으로 가입하기
          </Button>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
