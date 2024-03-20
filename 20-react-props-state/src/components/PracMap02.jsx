import { useState } from "react";

export default function PracMap02() {
  const [list, setList] = useState([]);
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");

  const addContent = () => {
    if (inputWriter.trim().length === 0 || inputTitle.trim().length === 0)
      return;
    const newContent = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      writer: inputWriter,
      title: inputTitle,
    });
    setList(newContent);
    setInputWriter("");
    setInputTitle("");
  };

  return (
    <div>
      <div>
        작성자:{" "}
        <input
          type="text"
          placeholder="작성자"
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
          value={inputWriter}
        />
        제목:{" "}
        <input
          type="text"
          placeholder="제목"
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
          value={inputTitle}
        />
        <button onClick={addContent}>작성</button>
      </div>

      <div>
        <select name="search">
          <option value="작성자">작성자</option>
          <option value="제목">제목</option>
        </select>
        <input type="text" />
        <button>검색</button>
        <button>전체</button>
      </div>

      <table>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>
        {list.map((content) => {
          return (
            <tr>
              <td>{content.id}</td>
              <td>{content.title}</td>
              <td>{content.writer}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
