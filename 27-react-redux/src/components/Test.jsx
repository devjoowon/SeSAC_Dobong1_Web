import { useDispatch, useSelector } from "react-redux";

export default function Test() {
  const state = useSelector((state) => state);
  console.log(state);

  // 1. dispatch가 action을 담아서 reducer에 보냄
  // 2. reducer는 action의 type에 따라서 state를 변경

  const dispatch = useDispatch();
  return (
    <>
      <h4>state 값 가져오기</h4>
      <p>state에 저장되어 있는 number state: {state}</p>
      <h4>state 값 변경하기</h4>
      <button onClick={() => dispatch({ type: "증가" })}>+1</button>
      <button onClick={() => dispatch({ type: "감소" })}>-1</button>
    </>
  );
}
