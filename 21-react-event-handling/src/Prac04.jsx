import { useState } from "react";

const Prac04 = () => {
  const [content, setContent] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [txtColor, setTxtColor] = useState("");

  const changeBgColor = (e) => {
    setBgColor(e.target.value);
  };
  const changeTxtColor = (e) => {
    setTxtColor(e.target.value);
  };

  const inputContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      과일 :
      <select onChange={(e) => {}}>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
        <option value="grape">포도</option>
      </select>
      배경색 :
      <select onChange={(e) => changeBgColor(e)}>
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색 :
      <select onChange={(e) => changeTxtColor(e)}>
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      <br />
      내용:
      <input type="text" onChange={inputContent} />
      <br />
      <img src="" alt="" />
      <br />
      <div style={{ color: txtColor, backgroundColor: bgColor }}>{content}</div>
    </>
  );
};

export default Prac04;
