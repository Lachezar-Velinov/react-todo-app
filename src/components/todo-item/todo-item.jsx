import './todo-item.css'
import Popup from 'reactjs-popup';
import { useState } from 'react';
import 'reactjs-popup/dist/index.css';

export function TodoItem({ todo, checkItem, removeItem, isDone }) {


  const [editedText, setEditedText] = useState(todo.title);


  const [open, setOpen] = useState(false);
  const closePopup = () => setOpen(false);

  const submit = (editedText) => {
    todo.title = editedText;
    closePopup();
  }
  const cancel = () => {
    setEditedText(todo.title);
    closePopup();
  }
  
  const clickOpen = () => {
    setEditedText(todo.title);
    setOpen(o => !o);
  }


  return (
    <div className="todo__item">
      <input type="checkbox" onChange={checkItem} checked={isDone} />
      {todo.title}
      <button onClick={removeItem}>␡</button>
      <button onClick={() => clickOpen()}>✏️</button>
      <Popup open={open} closeOnDocumentClick={false}>
        <div>
          <input type="text" name="name" defaultValue = {todo.title} value={editedText} onChange={(e) => setEditedText(e.target.value)} />
          <button onClick={() => submit(editedText)}>✓</button>
          <button onClick={() => cancel()}>X</button>
        </div>
      </Popup>

    </div>
  )
}