import { Task } from "./Task"

export default function TaskList({ tasks, onChange, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChange} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  )
}
