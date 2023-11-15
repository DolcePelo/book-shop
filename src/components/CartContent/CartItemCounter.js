import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";


const CartItemCounter = ({ product }) => {
  const { cart, setCart, buyProducts } = useContext(dataContext);

  const decrese = (product) => {
    const productrepeat = cart.find((item)=> item.id === product.id);

    Toastify({
      text: "Item removed from cart",
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

    productrepeat.quanty !== 1 && //operador ternario && cuando no hay un else
      setCart(cart.map((item) => item.id === product.id ? { ...product, quanty: productrepeat.quanty - 1 } : item))
  } 

  return (  
    <>
      <p className="counter-button" onClick={()=> decrese(product)}>-</p>
      <p>{product.quanty}</p>
      <p className="counter-button" onClick={()=> buyProducts(product)}>+</p>
    </>
  )
}

export default CartItemCounter