import { useState } from "react";
import Input from "../atom/Input";
// import Button from "@/components/atom/Button";

const PhoneNumberComponent = () => {
  const [firstPart, setFirstPart] = useState("");
  const [secondPart, setSecondPart] = useState("");
  const [thirdPart, setThirdPart] = useState("");

  const handleFirstPartChange = (e) => {
    if (e.target.value.length <= 3) {
      setFirstPart(e.target.value);
    }
  };

  const handleSecondPartChange = (e) => {
    if (e.target.value.length <= 4) {
      setSecondPart(e.target.value);
    }
  };

  const handleThirdPartChange = (e) => {
    if (e.target.value.length <= 4) {
      setThirdPart(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullNumber = `${firstPart}-${secondPart}-${thirdPart}`;
    console.log(fullNumber);
    // 전화번호를 사용한 추가적인 로직 처리
  };

  return (
    <div onSubmit={handleSubmit} className="flex flex-col gap-2">
      <label htmlFor="phonenumber" className="text-gray-100">
        전화번호
      </label>
      <div className="flex items-center gap-1">
        <Input
          id="firstPart"
          type="tel"
          value={firstPart}
          onChange={handleFirstPartChange}
          className="p-2 border border-gray-200 w-full"
          maxLength="3"
          required
        />
        <span>-</span>
        <Input
          id="secondPart"
          type="tel"
          value={secondPart}
          onChange={handleSecondPartChange}
          className="p-2 border border-gray-200 w-full"
          maxLength="4"
          required
        />
        <span>-</span>
        <Input
          id="thirdPart"
          type="tel"
          value={thirdPart}
          onChange={handleThirdPartChange}
          className="p-2 border border-gray-200 w-full"
          maxLength="4"
          required
        />
      </div>
    </div>
  );
};

export default PhoneNumberComponent;
