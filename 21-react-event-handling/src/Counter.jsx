import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  };

  const alertMsg = (event, msg) => {
    console.log(event.target);
    alert(`${msg}~, 현재 숫자는 ${num}입니다.`);
  };

  const consoleMsg = (msg) => {
    console.log(`${msg}~, 현재 숫자는 ${num}입니다.`);
  };

  const handleEvent = (e) => {
    console.log(e.target); // 지금 타겟팅 되고 있는 요소 (span)
    console.log(e.currentTarget); // onclick이 걸린 요소 자체 (button > span)
  };

  return (
    <div>
      <h2>{num}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={(e) => alertMsg(e, "전달돼라 얍!")}>alert 출력</button>
      <button
        onClick={() => {
          consoleMsg("방가방가!");
        }}
      >
        console 출력
      </button>
      <button onClick={handleEvent}>
        <span>target 확인</span>
      </button>
    </div>
  );
};

export default Counter;
