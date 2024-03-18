function SyntheticEvent() {
  function syntheticEvent(e) {
    console.log(e);
  }
  function printInputValue(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <button onClick={syntheticEvent}>클릭 이벤트 콘솔에 찍기</button>
      {/* 명확한 값일 땐(ex. e, a = 1) 위 처럼 적어도 됨 */}
      {/* <button onClick={(e)=>{syntheticEvent(e)}}>클릭 이벤트 콘솔에 찍기</button> */}
      <br />
      <input type="text" placeholder="입력" onChange={printInputValue} />
    </div>
  );
}
export default SyntheticEvent;
