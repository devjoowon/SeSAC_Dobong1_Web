const initialState = 0;

// 2. 이처럼 함수 만들어서 상수화 시키는것이 더 좋은 방법
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

export const countMinus = () => {
  return { type: DECREMENT };
};

export const countPlus = () => ({ type: INCREMENT });

// 1. 아래의 방법보다는
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/INCREMENT":
      return state + 1;
    case "counter/DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
