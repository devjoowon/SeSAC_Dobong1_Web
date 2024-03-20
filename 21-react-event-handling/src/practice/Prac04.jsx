import { useState } from "react";
import Input from "./Prac04_input";
import Result from "./Prac04_result";
import Select from "./Prac04_select";

export default function Prac04() {
  const [data, setData] = useState({
    // 이와 같이 object로 표현 가능
    fruit: "apple",
    background: "black",
    color: "white",
    content: "text",
  });

  console.log(data);
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Select setData={setData} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Input setData={setData} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Result data={data} />
      </div>
    </div>
  );
}
