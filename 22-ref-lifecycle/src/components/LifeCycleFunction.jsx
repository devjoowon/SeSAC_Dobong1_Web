import { useEffect } from "react";
import { useState } from "react";

function MyComponent({ number }) {
  const [text, setText] = useState("");

  // useEffect(effect, dependency array)
  // useEffect는 api 요청시 많이 쓰임
  /*
          - effect: 콜백 함수
              콜백 함수 내에 특정 시점에서 실행하고 싶은 코드 작성
          - dependency array: 해당 배열 값이 변하면 콜백 함수 실행
              생략: mount, update시 항상 동작
              []: mount되었을 때만 실행
              [data]: mount, data가 바뀌었을 때 실행 (update, mount)
       */

  // 1. mount 되었을 때
  //   useEffect(() => {
  //     console.log("함수형 컴포넌트 mount !");
  //   }, []);

  // 2. unmount 되었을 때
  useEffect(() => {
    // console.log("함수형 컴포넌트 mount !");

    return () => {
      //   console.log("함수형 컴포넌트 unmount !");
    };
  });
  // 3. update 되었을 때
  useEffect(() => {
    console.log("함수형 컴포넌트 | update 될 때마다 !");
  });

  useEffect(() => {
    console.log("함수형 컴포넌트 | number 변경될 때마다 !");
  }, [number]);

  return (
    <>
      <p>My Component{number}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
}

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => setNumber(number + 1);
  const changeVisibleState = () => setVisible(!visible);

  return (
    <>
      <button onClick={changeNumberState}>number + 1</button>
      <button onClick={changeVisibleState}>on/off</button>
      {visible && <MyComponent number={number} />}
    </>
  );
}
