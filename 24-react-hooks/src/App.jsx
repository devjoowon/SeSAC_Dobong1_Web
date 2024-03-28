import CustomHook from "./components/CustomHook";
import UseCallback from "./components/UseCallback";
import UseCallback2 from "./components/UseCallback2";
import UseMemo from "./components/UseMemo";
import UseMemoObj from "./components/UseMemoObj";
import UseForm from "./components/UseForm";
import UseReducer from "./components/UseReducer";
import useTitle from "./hooks/useTitle";
import PracUseForm from "./components/PracUseForm";

function App() {
  useTitle("React hook!");
  return (
    <>
      <h1>react hook</h1>
      {/* <UseMemo />
      <UseMemoObj /> */}
      {/* <UseCallback />
      <UseCallback2 /> */}
      <UseReducer />
      <CustomHook />
      <UseForm />
      <PracUseForm />
    </>
  );
}

export default App;
