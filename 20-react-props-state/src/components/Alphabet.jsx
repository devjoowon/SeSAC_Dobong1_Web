import { useState } from "react";

export default function Alphabet() {
  const [list, setList] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);

  const [inputAlpha, setInputAlpha] = useState("");

  /* 요소 추가하기 - concat 이용 */
  const addAlpha = () => {
    if (inputAlpha.trim().length === 0) return;
    const newAlpha = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      alpha: inputAlpha,
    });
    setList(newAlpha);
    setInputAlpha("");
  };

  /* 엔터키로 입력받기 */
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      addAlpha();
    }
  };

  /* 더블클릭으로 요소 삭제하기 - filter 이용 */
  const deleteAlpha = (id) => {
    const newAlpha = list.filter((alpha) => alpha.id !== id); // 클릭되는 아이디와 다를 경우 새로운 배열에 넣고, 같을 경우 안넣음
    setList(newAlpha);
  };

  return (
    <div>
      <ol>
        <input
          type="text"
          onChange={(e) => {
            setInputAlpha(e.target.value);
          }}
          value={inputAlpha}
          onKeyDown={(e) => activeEnter(e)}
        />
        <button onClick={addAlpha}>add alphabet</button>

        {/* 중괄호가 없기 때문에 return 없어도 됨 */}
        {list.map((alphabet) => (
          <li key={alphabet.id} onDoubleClick={() => deleteAlpha(alphabet.id)}>
            {alphabet.alpha}
          </li>
        ))}
      </ol>
    </div>
  );
}
