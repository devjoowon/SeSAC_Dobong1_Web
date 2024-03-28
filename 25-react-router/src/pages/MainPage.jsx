import { useSearchParams } from "react-router-dom";

export default function MainPage() {
  const [modeParams, setModeParams] = useSearchParams();

  console.log(modeParams.get("mode")); // null or dark

  return (
    // 다크모드 구현방법: mode: dark => className으로 dark 추가, scss에서 dark 클래스 스타일 추가
    <main className={`MainPage ${modeParams.get("mode")}`}>
      <h2>여기는 홈입니다.</h2>
      <button onClick={() => setModeParams({ mode: "dark" })}>Dark mode</button>
    </main>
  );
}
