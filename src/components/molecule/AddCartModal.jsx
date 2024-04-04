// import React from "react";

function AddcartModal({ isOpen, onClose, product }) {
  // 모달 스타일을 정의합니다.
  const modalStyles = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  };

  // 배경 오버레이 스타일을 정의합니다.
  const overlayStyles = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "999",
  };

  return (
    <>
      <div style={overlayStyles} onClick={onClose} />
      <div style={modalStyles}>
        <img src={product.image} alt={product.name} className="w-full" />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        {/* 다른 내용들 */}
        <button onClick={onClose}>닫기</button>
      </div>
    </>
  );
}

export default AddcartModal;
