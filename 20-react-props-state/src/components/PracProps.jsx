import img from "../pracprops.jpg";

export function PracProps(props) {
  const { food } = props;
  return (
    <div>
      <p>제가 좋아하는 음식은 {food}입니다.</p>
    </div>
  );
}

export function PracProps2(props) {
  const { title, author, price, type } = props;
  return (
    <div className="PracProps2">
      <h1>이번주 베스트셀러</h1>
      <img src={img} alt="베스트셀러" />
      <h2>{title}</h2>
      <p>저자: {author}</p>
      <p>판매가: {price}</p>
      <p>구분: {type}</p>
    </div>
  );
}

export function PracProps3(props) {
  const { text, valid } = props;
  return (
    <div>
      <p>{text}</p>
      <button onClick={valid}>콘솔메세지</button>
    </div>
  );
}

PracProps.defaultProps = {
  food: "김밥",
};

PracProps3.defaultProps = {
  text: "이건 기본 text props입니다.",
};
