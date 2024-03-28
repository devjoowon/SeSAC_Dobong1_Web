import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage({ products }) {
  //   console.log(products); // 여기서 products는 array [{}, {}, {}, ...]
  const params = useParams();
  //   console.log(params); // http://localhost:3000/products/1 => {productId: '1'}
  //   console.log(params.productId); // 1

  const { productId } = useParams();
  console.log(productId); // 1

  const navigate = useNavigate();

  // 배열 구조분해 할당 [targetProduct]: 첫번째 객체만 반환 (~~~[0]과 같은 의미)
  const [targetProduct] = products.filter((product) => {
    return product.id === Number(productId);
  });
  console.log(targetProduct); // {postId, id(판매 번호), name(상품명), email(판매자), body(상세 설명)}

  if (!targetProduct) {
    return <main>존재하지 않는 상품입니다.</main>;
  }

  return (
    <main>
      <h1>상세페이지</h1>
      <button onClick={() => navigate("/")}>홈으로 이동하기</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <ul>
        <li>판매 번호: {targetProduct.id}</li>
        <li>상품명: {targetProduct.name}</li>
        <li>판매자: {targetProduct.email}</li>
        <li>상세 설명: {targetProduct.body}</li>
      </ul>
    </main>
  );
}
