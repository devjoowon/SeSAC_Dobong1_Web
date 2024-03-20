// import { ClassProps, ClassProps2 } from "./components/ClassProps";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";
import PororoObj from "./components/PororoObj";
import PracState from "./components/PracState";
import PropsMap from "./components/PropsMap";
// import { FunctionProps, FunctionProps2 } from "./components/FunctionProps";
// import { PracProps, PracProps2, PracProps3 } from "./components/PracProps";
import "./PracProps.css";

function App() {
  const dataArr = [
    { name: "peach", number: 5, price: 5000 },
    { name: "banana", number: 1, price: 3000 },
    { name: "apple", number: 10, price: 7000 },
    { name: "grape", number: 2, price: 8500 },
  ];
  // const my_func = () => {
  //   console.log("콘솔 띄우기 성공!");
  // };
  return (
    <div className="App">
      <h1>map과 filter 사용</h1>
      <PropsMap arr={dataArr} />
      {/* <h1>hello, props</h1>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치" />
      <ClassProps2 name="포비" color="beige" nickname="곰" />
      <FunctionProps name="사과" number={5} price={1000} />
      <FunctionProps2 price={50000} />
      <FunctionProps2 name="딸기" price={10000}>
        <section style={{ backgroundColor: "yellow" }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2>
      <PracProps food="떡볶이" />
      <PracProps />
      <PracProps2
        title="나의 하루는 4시 30분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      />

      <PracProps3
        text="Practice 컴포넌트에서 넘겨준 text props입니다."
        valid={my_func}
      /> */}
      {/* <h1>hello, state</h1>
      <ClassState />
      <FunctionState />
      <PracState />
      <PororoObj /> */}
    </div>
  );
}

export default App;
