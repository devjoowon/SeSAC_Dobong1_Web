export default function Select(props) {
  const { setData } = props;
  /* setData가 넘어오는 형식 */
  // const [data, setData] = useState({
  //   fruit: "apple",
  //   background: "black",
  //   color: "white",
  //   content: "text",
  // });

  return (
    <>
      과일 :
      <select
        onChange={(e) => {
          console.log(e.target); // <select>...</select>
          console.log(e.target.value); // apple, banana, peach, grape
          setData((prevState) => {
            return { ...prevState, fruit: e.target.value }; // 전개 연산자를 통해 이전의 값은 그대로 가져오고, 새로운 값을 덮어쓰기 하는 중
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
        <option value="grape">포도</option>
      </select>
      배경색 :
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, background: e.target.value };
          });
        }}
      >
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
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, color: e.target.value };
          });
        }}
      >
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
    </>
  );
}
