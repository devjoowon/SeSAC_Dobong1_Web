import { useReducer } from "react";
import { useState } from "react";

const reducer = (prevState, action) => {
  // action: (state를 어떻게 바꿀지에 대한) 요구
  // dispatch: action을 담아 reducer로 전달해줌
  console.log("dispatch가 호출되면 reducer 동작!");
  console.log(action); // {type: 'deposit', payload: 0}

  // reducer의 내부 로직은 주로 switch, if등의 조건문을 많이 씀
  switch (action.type) {
    case "deposit":
      return prevState + action.payload;

    case "withdraw":
      return prevState - action.payload;
  }
};

export default function UseReducer() {
  const [number, setNumber] = useState(0);

  // const [스테이트, 디스패치] = useReducer(리듀서=실제로 스테이트를 바꿔주는 setter함수, 스테이트의 초기값)
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h3>useReducer 사용</h3>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        step={1000}
      />
      <button onClick={() => dispatch({ type: "deposit", payload: number })}>
        예금
      </button>
      <button onClick={() => dispatch({ type: "withdraw", payload: number })}>
        출금
      </button>
    </>
  );
}
