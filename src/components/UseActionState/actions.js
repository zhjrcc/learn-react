"use server"

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get("itemID")
  if (itemID === "1") {
    return "已加入购物车"
  } else {
    // 认为添加延迟以使等待更明显。
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
    return "无法加入购物车：商品已售罄"
  }
}
