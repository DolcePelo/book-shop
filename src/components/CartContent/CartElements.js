import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { AiOutlineClose } from "react-icons/ai";
import CartItemCounter from "./CartItemCounter";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const CartElements = () => {
  const { cart, setCart } = useContext(dataContext)

  const deleteFromCart = (id) => {
    const newArr = cart.filter((item) => item.id !== id)
    setCart(newArr);

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
  }
  
  return cart.map((product)=>{
    return(
      <>
      <div className="cartContent" key={product.id}>
        <img src={product.img} alt="product-card"/>
        <h3 className="name">{product.name}</h3>
        <CartItemCounter product={product} quanty={product.quanty}/>
        <h4 className="price">${product.price * product.quanty}</h4>
        <div className="delete-btn" onClick={()=>deleteFromCart(product.id)}><AiOutlineClose /></div>
      </div>
      <hr/>
      </>
    )
  })
}

export default CartElements