import './App.css';
import React from 'react';
import { useState } from 'react';
import Filter from './components/Filter';
import Table from './components/Table';
import AddTasc from './components/AddTasc';

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setNewTodoList] = React.useState([]);
  const [filteredTodoList, setFilteredTodoList] = React.useState([]);
  const [radio, setRadio] = React.useState('all');

  const handleChange = (e) => {
    setRadio(e.target.value);
    if (e.target.value === "incomplete") {
      const incompleteTodoList = [...todoList].filter((todo) => todo.status === "作業中");
      setFilteredTodoList(incompleteTodoList);
    } else if (e.target.value === "complete") {
      const completeTodoList = [...todoList].filter((todo) => todo.status === "完了");
      setFilteredTodoList(completeTodoList);
    } return
  }

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = {
      comment: todoText,
      status: "作業中"
    }
    todoList.push(newTodo);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const deletedTodoList = [...todoList];
    deletedTodoList.splice(index, 1);
    setNewTodoList(deletedTodoList);
  };

  const onClickSwitch = (index) => {
    const switchTodoList = [...todoList];
    if (switchTodoList[index].status === "作業中") {
      switchTodoList[index].status = "完了";
    } else if (switchTodoList[index].status === "完了") {
      switchTodoList[index].status = "作業中";
    }
    setNewTodoList(switchTodoList);
  };

  return (
    <>
    <div>
      {/* <label>
        <input type="radio" value="all" onChange={handleChange} checked={radio === 'all'} />
        すべて
      </label>
      <label>
        <input type="radio" value="incomplete" onChange={handleChange} checked={radio === 'incomplete'} />
        作業中
      </label>
      <label>
        <input type="radio" value="complete" onChange={handleChange} checked={radio === 'complete'} />
        完了
      </label> */}
    </div>
    <Filter radio={radio} handleChange={handleChange} />
    {/* <div>
      <h1>ToDo リスト</h1>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>コメント</td>
            <td>状態</td>
          </tr>
        </thead>
        {
          radio === "all"?
          <tbody>
          {todoList.map((todo,index) => (
            <tr>
              <td>{index}</td>
              <td>{todo.comment}</td>
              <td><button onClick={() => onClickSwitch(index)}>{todo.status}</button></td>
              <td><button onClick={() => onClickDelete(index)}>削除</button></td>
            </tr>
          ))}
        </tbody>
        :
        <tbody>
          {filteredTodoList.map((todo, index) => (
            <tr>
              <td>{index}</td>
              <td>{todo.comment}</td>
              <td><button onClick={() => onClickSwitch(index)}>{todo.status}</button></td>
              <td><button onClick={() => onClickDelete(index)}>削除</button></td>
            </tr>
          ))}
        </tbody>
        }
      </table>
    </div> */}
    <Table radio={radio} todoList={todoList} filteredTodoList={filteredTodoList} onClickSwitch={onClickSwitch} onClickDelete ={onClickDelete} />

    {/* <h2>新規タスクの追加</h2>
    <div>
      <input value={todoText} onChange={onChangeTodoText} />
      <button onClick={onClickAdd}>追加</button>
    </div> */}
    <AddTasc todoText={todoText} onChangeTodoText={onChangeTodoText} onClickAdd={onClickAdd}/>
    
    </>
  );
}

export default App;
