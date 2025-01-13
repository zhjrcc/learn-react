import { useState } from "react"
import FilterableProductTable from "./components/filterTable/FilterableProductTable"
import MyButton from "./components/button/MyButton"
import MySharedButton from "./components/button/MySharedButton"

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
]

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <div>
        <h2>独立更新的计数器</h2>
        <MyButton />
        <MyButton />
      </div>
      <div>
        <h2>共同的计数器</h2>
        <MySharedButton onClick={handleClick} count={count} />
        <MySharedButton onClick={handleClick} count={count} />
      </div>
      <div>
        <h2>数据过滤表格</h2>
        <FilterableProductTable products={PRODUCTS} />
      </div>
    </>
  )
}

export default App
