import { useState } from "react";

export default function PracMap01() {
  // 정보 리스트
  const [list, setList] = useState([]);

  // 입력 정보
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 정보 추가
  const addInfo = () => {
    if (name.trim().length === 0 || email.trim().length === 0) return;
    const newInfo = list.concat({
      name,
      email,
    });
    setList(newInfo);
    setName("");
    setEmail("");
  };

  // 엔터키로 정보 추가
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      addInfo();
    }
  };

  // 정보 삭제
  const deleteInfo = (email) => {
    console.log(email);
    const newInfo = list.filter((info) => info.email !== email);
    setList(newInfo);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        type="text"
        placeholder="이메일"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={addInfo}>등록</button>
      <div>
        {list.map((info) => (
          <h3 onDoubleClick={() => deleteInfo(info.email)}>
            {info.name}: {info.email}
          </h3>
        ))}
      </div>
    </div>
  );
}
