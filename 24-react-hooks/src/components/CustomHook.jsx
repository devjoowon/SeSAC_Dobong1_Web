import { useState } from "react";
import useToggle from "../hooks/useToggle";

export default function CustomHook() {
  /* 1. useState 사용 */
  //   const [isOpen, setIsOpen] = useState(true);

  /* 2. custom hook인 useToggle 사용 => 반복되는 코드 줄일 수 있음 */
  const [isOpen, setIsOpen] = useToggle(true);
  return (
    <>
      <h3>custom hook 사용해보기</h3>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Q. 리액트에서 커스텀 훅을 만들 수 있나요?
      </div>
      {isOpen && <div>네~!</div>}
    </>
  );
}
