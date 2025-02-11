import { memo, useState } from "react"

export const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1)

  console.log("干预了浏览器渲染的时间")
  let startTime = performance.now()
  while (performance.now() - startTime < 500) {}

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    }
    onSubmit(orderDetails)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Note: <code>ShippingForm</code> is artificially slowed down!
        </b>
      </p>
      <div>
        <label>
          Number of items:
          <button type="button" onClick={() => setCount(count - 1)}>
            -
          </button>
          {count}
          <button type="button" onClick={() => setCount(count + 1)}>
            +
          </button>
        </label>
      </div>
      <div>
        <label>
          City:
          <input type="text" name="city" />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
})
