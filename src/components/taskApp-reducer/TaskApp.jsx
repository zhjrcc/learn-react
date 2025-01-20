import AddTask from "./AddTask"
import TaskList from "./TaskList"
import { useReducer } from "react"

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  function handleAddTask(text) {
    dispatch({
      type: "added",
      text: text,
      id: nextId++,
    })
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    })
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    })
  }

  return (
    <>
      <h1>Day off in Kyoto</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onChange={handleChangeTask}
      />
    </>
  )
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ]
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id)
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}

let nextId = 3
const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
]
