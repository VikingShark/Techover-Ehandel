import { createContext, useState } from "react";

// Skapa en context
export const CartContext = createContext();

// Skapa en provider-komponent
const CartProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]); 
  const [cartIsEmpty, setCartIsEmpty] = useState(true);

  return (
    <CartContext.Provider value={{ quantity, setQuantity, cartItems, setCartItems, cartIsEmpty, setCartIsEmpty }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;