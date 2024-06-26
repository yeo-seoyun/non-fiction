import { atom } from "jotai";

// 유효성
export const rememberMe = atom(false); // 자동로그인
export const nicknameValidAtom = atom(true); // 닉네임 유효성
export const passwordValid = atom(false); // 비밀번호 유효성
export const confirmPasswordAtom = atom(""); // 패드워드 입력값 확인
export const emailValid = atom(false); // 이메일 유효성

// 입력값
export const emailAtom = atom(""); // 이메일 입력값
export const passwordAtom = atom(""); // 패스워드 입력값
export const nicknameAtom = atom(""); // 닉네임 입력값

// 카테고리 상태 정의
export const categoryState = atom("베스트셀러");
