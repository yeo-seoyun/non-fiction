import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200 py-2 text-sm flex flex-col gap-6">
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full text-left"
      >
        <span>{title}</span>
        <span>
          {isOpen ? (
            <FontAwesomeIcon
              icon={faAngleDown}
              className="w-4 h-4 transform rotate-180 transition-all"
            />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} className="w-4 h-4" />
          )}
        </span>
      </button>
      {isOpen && <div className="mt-1 text-xs text-gray-100">{children}</div>}
    </div>
  );
};

export default Dropdown;
