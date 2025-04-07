import { createContext, useState } from "react";

// Skapa en context
export const CartContext = createContext();

// Skapa en provider-komponent
const CartProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <CartContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;