import React from 'react'
import '../Cart/Cart.css';
import {Link} from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';


const Cart = () => {
  const { cart, totalPrice } = useCartContext(); //las importo del useCartContext
  
  if(cart.length === 0){
    return (
      <div className='cartStyles'>
       <h5> Carrito vacio </h5>
       <Link to= '/' className='cartButton'>Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div className='kart'>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p className='total'>Total: ${totalPrice()}</p>
    </div>
  )
}

export default Cart;
