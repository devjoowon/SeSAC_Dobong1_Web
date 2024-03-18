import { useState } from "react";

export default function Prac03() {
  const [text, setText] = useState("안녕하세요");
  function textSwitch() {
    if (text === "") {
      setText("안녕하세요");
    } else {
      setText("");
    }
  }

  return (
    <div>
      <div>{text}</div>
      <button onClick={textSwitch}>{`${text}` ? "사라져라" : "보여라"}</button>
    </div>
  );
}
