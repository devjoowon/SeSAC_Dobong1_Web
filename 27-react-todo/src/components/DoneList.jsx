import { useSelector } from "react-redux";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list);
  const doneList = list.filter((li) => li.done === true);

  return (
    <section className="DoneList">
      <h2>완료한 일</h2>
      <ul>
        {/* <li>완료한 일 1</li>
        <li>완료한 일 2</li>
        <li>완료한 일 3</li> */}
        {doneList.map((done) => {
          return <li key={done.id}>{done.text}</li>;
        })}
      </ul>
    </section>
  );
}
