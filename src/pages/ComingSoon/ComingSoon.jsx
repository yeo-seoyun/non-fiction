import ComingSoonSvg from "@/assets/ComingSoon/comingsoon.svg";

function ComingSoon() {
  return (
    <div className="flex flex-col gap-10 items-center justify-end py-[180px]">
      <img src={ComingSoonSvg} alt="준비중인 페이지 입니다." />
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl">
          현재 <strong>페이지 준비중</strong> 입니다.
        </h1>
        <p className="text-gray-100 text-center">
          보다 나은서비스를 제공하기 위하여 페이지 준비중에 있습니다.
          <br />
          빠른 시일내에 준비하여 찾아 뵙겠습니다.
        </p>
      </div>
    </div>
  );
}

export default ComingSoon;
