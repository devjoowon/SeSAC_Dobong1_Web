// App.js > Box1 > Box2

import { useDispatch, useSelector } from "react-redux";
import { countMinus, countPlus } from "../store/module/counterReducer";
import { changeData } from "../store/module/isDataReducer";

export function Box1() {
  return (
    <div style={{ border: "2px dashed pink", padding: "10px" }}>
      <h3>Box1</h3>
      <Box2 />
    </div>
  );
}

function Box2() {
  // 전체 state 가지고 오기
  //   const state = useSelector((state) => state);

  // 사용할 state만 가지고 오기
  const isData = useSelector((state) => state.isData);
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div style={{ border: "1.5px solid skyblue", padding: "10px" }}>
      <h3>Box2</h3>
      <p>count: {counter}</p>
      <p>isData: {isData.toString()}</p>
      <button onClick={() => dispatch({ type: "counter/INCREMENT" })}>
        count + 1
      </button>
      <button onClick={() => dispatch({ type: "counter/DECREMENT" })}>
        count - 1
      </button>
      <button onClick={() => dispatch({ type: "isData/CHANGE" })}>
        to {(!isData).toString()}
      </button>
      <button onClick={() => dispatch(countPlus())}>count + 1</button>
      <button onClick={() => dispatch(countMinus())}>count - 1</button>
      <button onClick={() => dispatch(changeData())}>
        to {(!isData).toString()}
      </button>
    </div>
  );
}
