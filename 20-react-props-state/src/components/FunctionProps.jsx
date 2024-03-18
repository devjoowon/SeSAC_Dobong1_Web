/* 함수형 컴포넌트 사용법 1 */
/*export function FunctionProps(props) {
  //   props = { name: "사과", number: 5, price: 1000 };
  return (
    <div>
      <h5>{props.name}</h5>
      <p>
        {props.number}개에 {props.price}원
      </p>
      <hr />
    </div>
  );
}*/

/* 함수형 컴포넌트 사용법 2 */
// 구조 분해 할당
/*export function FunctionProps(props) {
  const { name, number: count, price } = props;
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {count}개에 {price}원
      </p>
      <hr />
    </div>
  );
}*/

/* 함수형 컴포넌트 사용법 3 */
export function FunctionProps({ name, number, price }) {
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {price}원
      </p>
      <hr />
    </div>
  );
}

export function FunctionProps2(props) {
  const { name, number, price } = props;
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {price}원
      </p>
      <div>{props.children}</div>
      <hr />
    </div>
  );
}

// 컴포넌트이름.defaultProps = {정의할 데이터를 객체로 표현}
FunctionProps2.defaultProps = {
  number: 3,
  name: "샤인머스켓",
};
