import { AddToCartForm } from "./components/useActionState/AddToCartForm"
import { Product } from "./components/useCallback/Product"

function App() {
  return (
    <>
      <h2>useActionState</h2>
      <AddToCartForm itemID={"1"} itemTitle={"React"} />
      <AddToCartForm itemID={"2"} itemTitle={"Vue"} />
      <hr />
      <h2>useCallback</h2>
      <Product />
    </>
  )
}

export default App
