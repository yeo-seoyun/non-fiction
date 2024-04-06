import PropTypes from "prop-types";
import Input from "../atom/Input";
import { useAtom } from "jotai";
import { passwordAtom } from "@/store/stores";

// function pwReg(text) {
//   const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,16}$/;
//   return re.test(String(text).toLowerCase());
// }

function PasswordComponent({ id, labelText, placeholder }) {
  const [password, SetPassword] = useAtom(passwordAtom);
  // const [error, setError] = useState("");

  function handleInputChange(e) {
    SetPassword(e.target.value);
  }

  return (
    <div className="relative">
      <Input
        id={id}
        type="password"
        labelText={labelText}
        className="p-2 border border-gray-200"
        placeholder={placeholder}
        required
        ariaRequired={true}
        value={password}
        onChange={handleInputChange}
      />
      {id === "password" && (
        <p className="text-xs text-gray-100">
          (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8~12자)
        </p>
      )}
    </div>
  );
}

PasswordComponent.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PasswordComponent;
