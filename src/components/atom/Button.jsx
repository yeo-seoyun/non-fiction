import PropTypes from "prop-types";

const Button = ({
  onClick,
  children,
  className,
  type,
  ariaLabel,
  style,
  ...restProps
}) => {
  return (
    <button
      className={`button-atom  ${className || ""}`}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      style={style}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  ariaLabel: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
