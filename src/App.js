import './App.css';

import { useState } from 'react';
import { FormCreator } from './components/todo-creator';
import { TodoItem } from './components/todo-item/todo-item';
import jsonTodo from './todos.json';
import jsonComplete from './complete.json';


function App() {
  let [todos, addTodos] = useState(jsonTodo);
  let [complete, addCompletes] = useState(jsonComplete);


  const moveToComplete = (index) => {

    const completed = todos[index];

    return () => {
      todos[index].isDone = true;
      removeTodo(index)();
      addCompletes([...complete, completed]);
    }
  }
  const moveFromComplete = (index) => {

    const todo = complete[index];
    return () => {
      complete[index].isDone = false;
      removeComplete(index)();
      addTodos([...todos, todo]);
    }
  }


  const removeComplete = (index) => {
    return () => {
      const tds = complete.filter((_, idx) => index !== idx);
      addCompletes(tds);
    }
  };

  const addTodo = (title) => {
    addTodos([...todos, { title, isDone: false }])

    console.log(todos);
  }

  const removeTodo = (index) => {
    return () => {
      const tds = [...todos];
      tds.splice(index, 1)
      addTodos(tds);
    }
  };

  return (
    <div className='App'>
      <h1>Todo app</h1>
      <hr />
      <FormCreator createTodo={addTodo} />
      <div className="BigApp">
        <div>
          {
            todos.map((todo, index) => {
              return (
                <TodoItem key={index} itemIndex={index} removeItem={removeTodo(index)} todo={todo} checkItem={moveToComplete(index)} isDone={false} />
              );
            })
          }
        </div>
        <div>
          {
            complete.map((comp, index) => {
              return (
                <TodoItem key={index} itemIndex={index} removeItem={removeComplete(index)} todo={comp} checkItem={moveFromComplete(index)} isDone={true} />
              );
            })
          }
        </div>
      </div>

    </div>

  );
}

export default App;
