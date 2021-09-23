import React, { useEffect, useState } from "react"
import "./App.css"
import { commerce } from "./lib/commerce"

import { Products, Navbar } from "./components"

const App = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log(products)

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  )
}

export default App
