import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const AddModalTable = ({ cartItems, onRemoveItem }) => {
  return (
    <div className="overflow-x-auto overflow-scroll w-full max-h-[9.375rem]">
      <table className="w-full border-collapse">
        <caption className="sr-only">상품 목록</caption>
        <thead className="sr-only">
          <tr>
            <th scope="col" className="flex flex-col px-4 py-2">
              <span>상품명</span>
              <span>메시지카드</span>
            </th>
            <th scope="col" className="px-4 py-2">
              금액
            </th>
            <th scope="col" className="px-4 py-2 text-center">
              삭제
            </th>
          </tr>
        </thead>
        <tbody className="border">
          {cartItems.map((item, index) => (
            <tr key={item.id || index} className="border-b last:border-none">
              <td className="px-4 py-2">
                <div className="flex flex-col">
                  <span>{item.name}</span>
                  <span className="text-sm">-{item.messageCard}</span>
                </div>
              </td>
              <td className="px-4 py-2">{item.price.toLocaleString()}원</td>
              <td className="px-4 py-2 text-center">
                <button
                  type="button"
                  onClick={() => onRemoveItem(index)}
                  className="text-sm text-black-100 hover:text-gray-900"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

AddModalTable.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      messageCard: PropTypes.string,
    })
  ).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default AddModalTable;
