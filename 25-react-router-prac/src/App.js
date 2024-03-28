import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import StudentPage from "./pages/StudentPage";
import NotFound from "./pages/NotFound";
import "./styles/style.scss";

const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student/:studentName" element={<StudentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MyLink></MyLink>
    </div>
  );
}

export default App;
