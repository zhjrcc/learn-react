import AddTask from "./AddTask"
import TaskList from "./TaskList"

export default function TaskApp() {
  return (
    <>
      <h1>Day off in kyoto</h1>
      <AddTask />
      <TaskList tasks={initialTasks} />
    </>
  )
}

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
]
