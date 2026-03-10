import "../assets/css/TodoList.css"
import { useState } from "react";

let id = 1;

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const createTask = () => {
    setTasks([...tasks, { id: id, name: task }]);
    id++;
  };

  return (
    <section className="gray_border todo-list_component">
      <div className="flex_center flex-n-gap_tasks">
        <h3>TODO LIST</h3>
        <input
          type="text"
          id="task"
          name="task"
          className="input1"
          onChange={(t) => setTask(t.target.value)}
        />
        <button
          className="add-task_button green_button"
          onClick={createTask}
        >
          Add Task
        </button>
      </div>
      <div className="flex_center tasks_allignment">
        <h4 className="large-text">Tasks:</h4>
        <ol className="gray_border task-list_size">
          {tasks.map((t) => {
            return (
              <li key={t.id} className="flex_center gap-2">
                <p>{t.name}</p>
                <button
                  className="red_button delete-taks_button"
                  onClick={() => {
                    setTasks(tasks.filter((prev) => prev.id !== t.id));
                  }}
                >
                  🗑
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default TodoList;
