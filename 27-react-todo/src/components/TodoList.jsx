import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { create, done } from "../store/module/todo";

export default function TodoList() {
  const list = useSelector((state) => state.todo.list);
  // console.log(list);

  // list내에 done: false 인 값만 todoList에 넣기
  const todoList = list.filter((li) => li.done === false);
  // console.log(todoList);

  const dispatch = useDispatch();
  const todoRef = useRef();
  const nextID = useSelector((state) => state.todo.nextID);

  function createTodo() {
    // dispatch({
    //   type: "todo/CREATE",
    //   payload: { id: 3, text: todoRef.current.value },
    // });

    // dispatch(create({ id: list.length, text: todoRef.current.value }));
    dispatch(create({ id: nextID, text: todoRef.current.value }));
    todoRef.current.value = "";
  }

  return (
    <section className="TodoList">
      <h2>오늘의 할 일</h2>
      <div>
        <input type="text" placeholder="Todo" ref={todoRef} />
        <button onClick={createTodo}>할 일 추가</button>
      </div>
      <ul>
        {/* <li>
          <span>할 일 1</span> <button>완료</button>
        </li>
        <li>
          <span>할 일 2</span> <button>완료</button>
        </li>
        <li>
          <span>할 일 3</span> <button>완료</button>
        </li> */}
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>{" "}
              <button
                // onClick={() => dispatch({ type: "todo/DONE", id: todo.id })}
                onClick={() => dispatch(done(todo.id))}
              >
                완료
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
