import "./todo-creator.css";

export function FormCreator({ createTodo }) {

  const sumbitTheForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const todoTitle = form.todoTitle;
    const value = todoTitle.value;

    if(!value) {
      return;
    }


    createTodo(todoTitle.value);
    console.log(event);
    form.reset();
  }

  return (
    <div className="todo-form">
      <label> Todo creator </label>
      <form onSubmit={sumbitTheForm}>
        <div>
          <input type="text" name="todoTitle" placeholder="Add todo" />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
