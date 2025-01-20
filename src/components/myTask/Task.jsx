export default function Task({ task }) {
  return (
    <>
      <label>
        <input type="checkbox" checked />
      </label>

      {task.text}
      <button>Edit</button>

      <input type="text" value={task.text} />
      <button>Save</button>

      <button>Delete</button>
    </>
  )
}
