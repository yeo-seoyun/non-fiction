import PropTypes from "prop-types";

const Input = ({
  id,
  type,
  value,
  onChange,
  labelText,
  ariaRequired,
  required,
  className,
  ...restProps
}) => {
  return (
    <div className="flex flex-col gap-2 text-gray-100">
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        aria-required={ariaRequired}
        className={className}
        {...restProps}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  labelText: PropTypes.string,
  ariaRequired: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Input;
