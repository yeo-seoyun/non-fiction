import PropTypes from "prop-types";
import Input from "../atom/Input";
import { useAtom } from "jotai";
import { passwordAtom } from "@/store/stores";
import { useState } from "react";

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,16}$/;
  return re.test(String(text).toLowerCase());
}

function PasswordComponent({ id, labelText, placeholder }) {
  const [password, SetPassword] = useAtom(passwordAtom);
  const [error, setError] = useState("");

  function handleInputChange(e) {
    SetPassword(e.target.value);
    const { value } = e.target;
    const isValid = pwReg(value);

    setError(
      isValid ? "" : "(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8~12자)"
    );
  }

  return (
    <div className="relative">
      <Input
        id={id}
        type="password"
        labelText={labelText}
        className={`p-2 border text-sm ${
          error ? "border-warning" : "border-gray-200"
        } focus:ring-indigo-500 focus:border-indigo-500`}
        placeholder={placeholder}
        required
        ariaRequired={true}
        value={password}
        onChange={handleInputChange}
      />
      {error && <p className="text-xs text-gray-100">{error}</p>}
    </div>
  );
}

PasswordComponent.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PasswordComponent;
