import SelectComponent from "../molecule/SelectComponent";

const MessageCardSelect = ({ selectedOption, handleSelectChange }) => {
  return (
    <div>
      <p className="sm:text-sm">메세지카드</p>
      <SelectComponent
        id="messageCard"
        value={selectedOption}
        onChange={(e) => handleSelectChange(e.target.value)}
        options={[
          { label: "[필수] 옵션을 선택 해주세요", value: "option1" },
          { label: "Thank you", value: "Thank you" },
          { label: "Happy Birthday", value: "Happy Birthday" },
          { label: "Congratulations", value: "Congratulations" },
          { label: "선택안함", value: "선택안함" },
        ]}
        className="border p-2 mt-1 sm:w-full sm:text-xs"
      />
    </div>
  );
};

export default MessageCardSelect;
