import LifeCycleClass from "./components/LifeCycleClass";
import LifeCycleFunc from "./components/LifeCycleFunction";
import PracLifeCycle01 from "./components/PracLifeCycle01";
import PracLifeCycle02 from "./components/PracLifeCycle02";
import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunction";

function App() {
  return (
    <div className="App">
      <h1>ref</h1>
      <RefClass1 />
      <RefClass2 />
      <RefFunc1 />
      <RefFunc2 />
      <h1>Life Cycle</h1>
      <LifeCycleClass />
      <LifeCycleFunc />
      <hr />
      <PracLifeCycle01 />
      <PracLifeCycle02 />
    </div>
  );
}

export default App;
