const initialState = {
  list: [
    {
      id: 0,
      text: "리액트 공부하기",
      done: false,
    },
    {
      id: 1,
      text: "ncp 서버 삭제하기",
      done: false,
    },
    {
      id: 2,
      text: "기차표 예매하기",
      done: true,
    },
  ],
};

const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

let count = initialState.list.length;
initialState["nextID"] = count;

export function create(payload) {
  return {
    type: CREATE,
    payload, // object {id, text}
  };
}

export function done(id) {
  return {
    type: DONE,
    id, // number
  };
}

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      if (action.payload.text.trim() === "") return state;
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((li) => {
          // 배열의 요소에 있는 id와 액션으로 들어오는 id가 같다면
          if (li.id === action.id) {
            return {
              ...li,
              done: true, // done: false였던 done값 덮어쓰기
            };
          } else {
            return li;
          }
        }),
      };
    default:
      return state;
  }
}
