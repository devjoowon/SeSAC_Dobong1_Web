import Counter from "./Counter";
import Prac01 from "./practice/Prac01";
import Prac02 from "./practice/Prac02";
import Prac03 from "./practice/Prac03";
import Prac04 from "./practice/Prac04";
import SyntheticEvent from "./SyntheticEvent";

function App() {
  return (
    <div className="App">
      <h1>합성 이벤트</h1>
      <SyntheticEvent />
      <Counter />
      <hr />
      <Prac01 />
      <hr />
      <Prac02 />
      <hr />
      <Prac03 />
      <hr />
      <h1 style={{ textAlign: "center" }}>종합 실습문제</h1>
      <Prac04 />
    </div>
  );
}

export default App;
