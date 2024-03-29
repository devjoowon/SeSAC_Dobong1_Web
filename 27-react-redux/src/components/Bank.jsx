import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../store/module/bankReducer";
import { useState } from "react";

export default function PracRedux() {
  const [money, setMoney] = useState(0);

  const balance = useSelector((state) => state.bank);
  const dispatch = useDispatch();
  return (
    <>
      <h1>코딩온 은행</h1>
      <h2>잔액 : {balance}</h2>
      <input
        type="number"
        value={money}
        onChange={(e) => setMoney(Number(e.target.value))}
        step={100}
      />
      <button onClick={() => dispatch(deposit(money))}>입금</button>
      <button onClick={() => dispatch(withdraw(money))}>출금</button>
    </>
  );
}
