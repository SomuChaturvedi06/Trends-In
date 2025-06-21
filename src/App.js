// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import Screen from "./components/Screen";
import Slide from "./components/Slide"
import Footer from "./components/Footer"
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart if not already added (optional: prevent duplicates)
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      // Optional: prevent duplicate adds
      if (prevItems.find((i) => i.title === item.title)) {
        return prevItems;
      }
      return [...prevItems, item];
    });
  };

  return (
    <>
      <Header cartItems={cartItems} />
      <Screen onAddToCart={handleAddToCart} />
      <Slide/>
      <Footer/>
    </>
  );
};

export default App;


