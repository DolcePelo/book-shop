import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios('data.json').then((res) => setData(res.data))
  }, [])

  const buyProducts = (product) => {
    const productrepeat = cart.find((item) => item.id === product.id)

    Toastify({
      text: "Item added to cart",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();

    if (productrepeat) {
      setCart(cart.map((item) => item.id === product.id ? { ...product, quanty: productrepeat.quanty + 1 } : item))
    } else {
      setCart([...cart, product])
    };

  };

  return (
    <dataContext.Provider value={{ data, cart, setCart, buyProducts }}>
      {children}
    </dataContext.Provider>
  )
};

export default DataProvider;