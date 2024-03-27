import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // [before] useMemo 사용 전
  //   const location = {
  //     country: isKorea ? "한국" : "외국",
  //   };

  // useMemo보다 아래와 같이 하는것이 가장 좋음.
  // const location = isKorea ? "한국" : "외국";

  // [after] useMemo 사용
  const location = useMemo(() => {
    return { country: isKorea ? "한국" : "외국" };
  }, [isKorea]);

  useEffect(() => {
    console.log("location이 바뀔 때마다 실행됩니다."); // 렌더링 될때마다 주소값이 바뀜 그래서 숫자를 바꿔도 이 콘솔이 뜸
  }, [location]);

  return (
    <>
      <h3>UseMemo와 Object</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div>{location.country}</div>
      <button onClick={() => setIsKorea(!isKorea)}>나라 바꾸기</button>
    </>
  );
}
