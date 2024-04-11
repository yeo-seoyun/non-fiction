import PropTypes from "prop-types";
import Dropdown from "@/components/atom/Dropdown";
import { faComment, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useEffect, useState } from "react";

function ProductInfo({ product }) {
  return (
    <div>
      <Dropdown title="선물을 위한 혜택">
        <p>드롭다운 내용 1</p>
      </Dropdown>
      <Dropdown title="전성분">
        {product.mfds && <p>{product.mfds}</p>}
      </Dropdown>
      <Dropdown title="제품 상세 정보">
        {product.details && <p>{product.details}</p>}
      </Dropdown>
      <Dropdown title="주의사항">
        <ul>
          <li>사용할 때의 주의사항:</li>
          <li>
            1) 화장품 사용 시 또는 사용 후 직사광선에 의하여 사용부위가 붉은
            반점, 부어오름 또는 가려움증 등의 이상 증상이나 부작용이 있는 경우
            전문의 등과 상담할 것
          </li>
          <li>2) 상처가 있는 부위 등에는 사용을 자제할 것</li>
          <li>3) 보관 및 취급 시의 주의사항</li>
          <li>가) 어린이의 손이 닿지 않는 곳에 보관할 것</li>
          <li>나) 직사광선을 피해서 보관할 것</li>
          <li>
            품질보증기준: 본 제품은 공정거래위원회고시 소비자분쟁해결 기준에
            의거 교환 또는 보상 받을 수 있습니다.
          </li>
          <li>소비자상담번호: 1666-7891</li>
        </ul>
      </Dropdown>
      <Dropdown title="배송 & 문의">
        <div className="flex flex-col gap-5">
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
              HELLO@NONFICTION.COM
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} className="mr-1" />
              1:1 채팅
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            <li className="font-bold">SHIPPING & HANDLING</li>
            <li>
              - 평일 오후 12시 이전 결제 완료 건은 당일 발송됩니다. [주말 및
              공휴일 제외] - 주문 취소 및 옵션변경은 [상품 준비중] 단계에서만
              가능합니다.
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            <li className="font-bold">RETURN POLICY</li>
            <li>
              <ul>
                <li className="font-bold">· 교환/반품 기간</li>
                <li>
                  - 상품 수령 후 7일 이내 고객센터를 통한 교환 및 반품접수가
                  가능합니다.
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="font-bold">· 교환/반품 배송료</li>
                <li>
                  - 단순 변심으로 인한 교환/반품 시 왕복 배송료가 발생합니다.
                  [편도 3,000원]
                </li>
                <li>
                  - 제품 불량 및 오배송으로 인한 교환/반품의 경우, 불량 확인 시
                  배송료는 발생하지 않습니다.
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="font-bold">· 교환/반품 불가사유</li>
                <li>- 제품 개봉(라벨 제거) 또는 사용한 경우</li>
                <li>- 제품 박스가 훼손되어 재판매가 불가한 경우</li>
                <li>- 각인과 같은 개인 맞춤 제작 상품의 경우</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              * 본 제품에 이상이 있을 경우 공정거래위원회에서 고시한 '소비자
              분쟁 해결기준'에 의거하여 교환 또는 보상을 받을 수 있습니다.
            </li>
            <li>
              * 온라인 스토어에서 구입하신 상품은 논픽션 오프라인 스토어에서
              교환/반품이 불가합니다.
            </li>
            <li>
              * 상세 내용은 사이트 하단 [INFO]-[배송 & 교환/반품] 페이지에서
              확인 가능합니다.
            </li>
          </ul>
        </div>
      </Dropdown>
    </div>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    collectionId: PropTypes.string.isRequired,
    title_ko: PropTypes.string.isRequired,
    title: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    volume: PropTypes.arrayOf(PropTypes.string),
    description_ko: PropTypes.string,
    photo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    category: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProductInfo;
