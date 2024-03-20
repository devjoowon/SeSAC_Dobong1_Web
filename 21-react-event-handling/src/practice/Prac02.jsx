import { useState } from "react";

export default function Prac02() {
  const [color, setColor] = useState("black");

  function changeToRed(color) {
    setColor(color);
  }
  function changeToBlue(color) {
    setColor(color);
  }
  return (
    <div>
      <div style={{ color: `${color}` }}>{color}</div>
      <button onClick={() => changeToRed("red")}>red</button>
      <button onClick={() => changeToBlue("blue")}>blue</button>
    </div>
  );
}
