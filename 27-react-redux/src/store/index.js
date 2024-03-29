// 두개의 리듀서를 통합하는 과정

import { combineReducers } from "redux";
import { isDataReducer } from "./module/isDataReducer";
import { counterReducer } from "./module/counterReducer";
import { bankReducer } from "./module/bankReducer";

// rootReducer 모든 리듀서를 통합해서 내보내는 역할을 할 예정
// 여러 개의 리듀서를 하나로 합쳐주는 combineReducer
const rootReducer = combineReducers({
  isData: isDataReducer,
  counter: counterReducer,
  bank: bankReducer,
});

export default rootReducer;
