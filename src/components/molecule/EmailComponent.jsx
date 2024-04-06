import PropTypes from "prop-types";
import Input from "../atom/Input";
import { emailAtom, emailValid } from "@/store/stores";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import pb from "@/api/pocketbase";

const warning = "border-warning border";

function emailReg(text) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(text).toLowerCase());
}

function fetchEmail() {
  return pb.collection("users").getFullList();
}

function EmailComponent({ error }) {
  const [, setEmailValid] = useAtom(emailValid);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [emailBorder, setEmailBorder] = useState("");
  const [emailValue, setEmailValue] = useAtom(emailAtom);

  const { data: allUsers } = useQuery({
    queryKey: ["users"],
    queryFn: fetchEmail,
    staleTime: 1000 * 10,
  });

  useEffect(() => {
    const userEmails = allUsers?.map((user) => user.email);
    const isDuplicateEmail = userEmails?.includes(emailValue);
    setIsDuplicate(!!isDuplicateEmail);
  }, [allUsers, emailValue]);

  // 이메일 중복 체크
  const handleValidateEmail = (e) => {
    const isValid = emailReg(e.target.value);
    setEmailValue(e.target.value);
    setEmailBorder(isValid ? "" : warning);
    setEmailValid(isValid);
  };

  return (
    <div className="relative">
      <Input
        id="email"
        type="email"
        value={emailValue}
        labelText="이메일"
        onChange={handleValidateEmail}
        className="p-2 border border-gray-200"
        placeholder="이메일"
        required
        ariaRequired={true}
      />
      {error && (
        <div className="text-xs -bottom-4 absolute text-gray-100">
          <p className={`text-warning ${emailBorder ? "block" : "hidden"}`}>
            올바른 이메일 형식을 작성해주세요.
          </p>
          <p className={`text-warning ${isDuplicate ? "block" : "hidden"}`}>
            이미 가입된 이메일입니다.
          </p>
        </div>
      )}
    </div>
  );
}

EmailComponent.propTypes = {
  label: PropTypes.bool,
  error: PropTypes.bool,
  style: PropTypes.string,
};

export default EmailComponent;
