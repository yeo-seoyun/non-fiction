import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="bg-gray-300 flex flex-col justify-between p-[1.563rem] w-full h-[18.75rem]">
      <div className="flex flex-wrap gap-y-4 lg:flex-row justify-between">
        <ul>
          <li className="text-lg pb-5">고객센터</li>
          <ul className="flex flex-col gap-1">
            <li className="text-lg">1666-7891</li>
            <li>
              <FontAwesomeIcon icon={faClock} className="mr-1" />
              10:00 ~ 17:00
            </li>
            <li>주말 및 공휴일 휴무</li>
          </ul>
        </ul>
        <ul>
          <li className="text-lg pb-5">온라인 단독 혜택</li>
          <ul className="flex  flex-col gap-1">
            <li>공식 온라인 스토어 혜택</li>
            <li>오드퍼퓸 체험 키트</li>
          </ul>
        </ul>
        <ul>
          <li className="text-lg pb-5">서비스</li>
          <ul className="flex flex-col gap-1">
            <li>기업구매문의</li>
            <li>채용</li>
            <li>자주 묻는 질문</li>
            <li>배송&교환/반품</li>
            <li>매장안내</li>
          </ul>
        </ul>
        <ul>
          <li className="text-lg pb-5">소셜</li>
          <ul>
            <li>
              <FontAwesomeIcon icon={faInstagram} className="mr-1" />
              Instagram
            </li>
          </ul>
        </ul>
      </div>
      <div className="text-xs text-gray-100 flex gap-1">
        <a href="none">이용약관</a>
        <span>|</span>
        <a href="none">개인정보처리방침</a>
        <span>|</span>
        <a href="none">배송조회</a>
        <span>|</span>
        <a href="none">사업자 정보 확인</a>
      </div>
    </footer>
  );
}

export default Footer;
