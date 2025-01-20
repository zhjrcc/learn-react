import { useContext, useState } from "react"
import { TasksContext, TasksDispatchContext } from "./TasksContext"

export default function AddTask() {
  const dispatch = useContext(TasksDispatchContext)
  const tasks = useContext(TasksContext)
  const [text, setText] = useState("")
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("")
          dispatch({
            type: "added",
            id: tasks.length - 1,
            text: text,
          })
        }}
      >
        Add
      </button>
    </>
  )
}
