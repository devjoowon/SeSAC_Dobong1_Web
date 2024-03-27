import { useCallback } from "react";
import { useState } from "react";

export default function UseCallback2() {
  const [text, setText] = useState("");

  // input 태그의 onChange 이벤트는 업데이트가 잦을 수 밖에 없음
  // 그러므로 재렌더링 될 때마다 새롭게 이벤트 핸들러 함수가 생성됨
  //   const onChangeText = (e) => {
  //     setText(e.target.value);
  //     };

  // 반복되는 이벤트 핸들러 함수 >> useCallback 이용 메모이제이션
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <input type="text" onChange={onChangeText} />
      <p>작성한 값: {text}</p>
    </>
  );
}
