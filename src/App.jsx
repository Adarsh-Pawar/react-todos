import { useState } from 'react';
import Todo from './components/Todo'


import "./index.css";
function App() {

  const [todos,setTodos] = useState([""]);
  const [newTodo,setNewTodo] = useState("");

  const handleAddTodo = () => {
    if(newTodo.trim() !== "") {
      setTodos([...todos,newTodo]);
      setNewTodo("");
    }
  }

  const handleDeleteTodo = (indexToDelete) => {
    setTodos(todos.filter((todo,index) => index !== indexToDelete));
  }


  return (
    <>
      <div className="main">
        <h1 style={{marginBottom:"2px"}}>My Todos</h1>
        <h3>Seriously man do it!!</h3>
        <input type='text' placeholder='Enter title' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button className='btn add-btn' onClick={handleAddTodo}>Add Todo</button>
        <div className="card-container">
          {todos.map((todo,index) => 
            <Todo key={index} title={todo} onDelete={() => handleDeleteTodo(index)}/>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
