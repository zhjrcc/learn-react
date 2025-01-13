import { useState } from "react"

export default function MyButton() {
  const [count, setCount] = useState(0)
  function handlerClick() {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={handlerClick}>点了{count}次</button>
    </div>
  )
}
