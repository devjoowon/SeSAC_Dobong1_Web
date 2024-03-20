import { useState } from "react";

export default function PracMap01_byAllie() {
  const [userList, setUserList] = useState([
    { id: 1, name: "코디", email: "codee@test.com" },
    { id: 2, name: "주원", email: "joowon@test.com" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 1. 실제로 등록시켜주는 함수
  /*
        - userList state를 변경시켜 재랜더링 되도록
        - 빈 값이 입력되면 alert 띄우기
        - 등록 후에 input 빈칸 만들기
    */
  const registerUser = () => {
    // 이름과 이메일 값 중 하나라도 안들어왔다면, alert창 띄우기
    console.log(name);
    console.log(email);

    if (name.trim().length === 0 || email.trim().length === 0) {
      alert("이름과 이메일 모두 작성해주세요.");
      return; // 밑에 있는 동작들이 실행되지 않도록 return 시켜줘야 함 (return alert도 가능)
    }

    setUserList(
      userList.concat({
        id: userList.length === 0 ? 1 : userList[userList.length - 1].id + 1,
        name: name, // key와 value가 같은 경우 생략 가능
        email: email, // key와 value가 같은 경우 생략 가능
      })
    );

    setName("");
    setEmail("");
  };

  // 2. 엔터로 등록시켜주는 함수
  const enterRegister = (e) => {
    if (e.key === "Enter") registerUser();
  };

  // 3. 더블클릭시 삭제되는 함수
  const deleteUser = (id) => {
    const newUserList = userList.filter((user) => user.id !== id);
    setUserList(newUserList);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="이름"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name} // 빈 값으로 반영하기 위해
        />
        <input
          type="email"
          placeholder="이메일"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onKeyDown={enterRegister}
          value={email} // 빈 값으로 반영하기 위해
        />
        <br />
        <button onClick={registerUser}>등록</button>
      </div>
      {userList.map((user) => {
        return (
          <h4 key={user.id} onDoubleClick={() => deleteUser(user.id)}>
            {user.name}: {user.email}
          </h4>
        );
      })}
    </div>
  );
}
