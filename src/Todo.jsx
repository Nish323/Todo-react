import { useState } from 'react';
import './styles.css';

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTosos, setIncompleteTodos] = useState([
      "TODOです1",
      "TODOです2"
    ]);
  const [completeTosos, setcompleteTodos] = useState([
    "TODOでした1",
    "TODOでした2"
  ]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTosos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  return (
    <>
      <div className='input-area'>
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTosos.map((todo) => (
            //DBあるならidとかの一意な要素がいい
            <li key={todo}>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {completeTosos.map((todo) => (
            <li ket={todo}>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
    </div>
    </>
  );
};
