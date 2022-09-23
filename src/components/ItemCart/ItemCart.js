import React from 'react';
import { useCartContext } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import '../ItemCart/ItemCart.css';

const ItemCart = ({ product }) => {
const {removeItem} = useCartContext(); //lo importo desde CartContext

  return (
    <div className='itemCart'>
        <img src={product.image} alt={product.name} />
        <div>
            <h5>{product.name}</h5>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: {product.price}</p>
            <p>Subtotal: ${product.quantity * product.price}</p>
            <button onClick={()=> removeItem(product.id)}> <DeleteIcon /> </button>
        </div>
    </div>
  )
}

export default ItemCart
