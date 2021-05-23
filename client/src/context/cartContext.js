import React, { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = item => {
    var currItem = cart.find(x => x.id === item.id)

    if (currItem) {
      currItem.quantity += 1
    } else {
      setCart([
        ...cart,
        {
          price: item.id,
          quantity: 1,
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 10,
          },
        },
      ])
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default ({ element }) => <CartProvider>{element}</CartProvider>
