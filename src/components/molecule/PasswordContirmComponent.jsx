import PropTypes from "prop-types";
import { confirmPasswordAtom, passwordAtom } from "@/store/stores";
import { useAtom } from "jotai";
import Input from "../atom/Input";

function PasswordConfirmComponent({ id, labelText, placeholder }) {
  const [password] = useAtom(passwordAtom);
  const [confirmPassword, setConfirmPassword] = useAtom(confirmPasswordAtom);

  const handleInputChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="relative">
      <Input
        id={id}
        type="password"
        labelText={labelText}
        className={`p-2 border text-sm ${
          password === confirmPassword ? "border-gray-200" : "border-warning"
        }`}
        placeholder={placeholder}
        value={confirmPassword}
        onChange={handleInputChange}
      />
      {password !== confirmPassword && (
        <p className="text-xs text-gray-100">
          입력하신 비밀번호가 일치하지 않습니다
        </p>
      )}
    </div>
  );
}

PasswordConfirmComponent.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PasswordConfirmComponent;
