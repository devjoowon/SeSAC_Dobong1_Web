const initialState = 0;
const DEPOSIT = "bank/DEPOSIT";
const WITHDRAW = "bank/WITHDRAW";

export function deposit(payload) {
  return { type: DEPOSIT, payload: payload };
}

export function withdraw(payload) {
  return { type: WITHDRAW, payload: payload };
}

export function bankReducer(state = initialState, action) {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
}
