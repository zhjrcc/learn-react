import { useState } from "react"
import { ProductPage } from "./ProductPage"
import "./style.css"

export function Product() {
  const [isDark, setIsDark] = useState(false)
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <ProductPage
        referredId="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      />
    </>
  )
}
