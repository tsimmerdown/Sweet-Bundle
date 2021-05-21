import React, { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = item => {
    const newItem = {
      id: item.priceID,
      title: item.title,
      description: item.desc,
    }

    setCart([...cart, newItem])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
