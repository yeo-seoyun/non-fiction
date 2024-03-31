import PropTypes from "prop-types";
import Input from "../atom/Input";

const PassworldComponent = ({
  id,
  labelText,
  handleInputChange,
  value,
  placeholder,
}) => {
  return (
    <div className="relative">
      <Input
        id={id}
        type="password"
        labelText={labelText}
        onChange={handleInputChange}
        value={value}
        className="p-2 border border-gray-200"
        placeholder={placeholder}
        required
        ariaRequired={true}
      />
      {id === "password" && (
        <p className="text-xs text-gray-100">
          (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8~12자)
        </p>
      )}
    </div>
  );
};

PassworldComponent.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default PassworldComponent;
