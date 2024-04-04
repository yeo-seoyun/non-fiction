import PropTypes from "prop-types";

const SelectComponent = ({
  id,
  value,
  onChange,
  labelText,
  className,
  options,
}) => {
  return (
    <div className="flex flex-col gap-2 text-black-200">
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <select id={id} value={value} onChange={onChange} className={className}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectComponent.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectComponent;
