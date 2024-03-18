import { useState } from "react";

export default function PracState() {
  const [num, setNum] = useState(0);
  function increase() {
    setNum(num + 1);
  }
  function decrease() {
    setNum(num - 1);
  }
  return (
    <div>
      <div>
        {num}
        <span>{num >= 8 ? "🤩" : "😊"}</span>
      </div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
