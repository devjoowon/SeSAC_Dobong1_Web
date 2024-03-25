import "./App.css";
import AppCss from "./components/AppCss";
import BasicCss from "./components/BasicCss";
import ModuleCss from "./components/ModuleCss";
import Sass from "./components/Sass";
import StyledComp from "./components/StyledComp";

function App() {
  return (
    <>
      <h1>react에 style 적용하기</h1>
      {/* <BasicCss />
      <ModuleCss />
      <StyledComp />
      <AppCss /> */}
      <Sass />
    </>
  );
}

export default App;
