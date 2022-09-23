import React, {useContext} from "react";
import './Item.css'
import {Link} from 'react-router-dom';

const Item = ({ productinfo }) => {
  return (
    <Link to={`/item/${productinfo.id}`} className='itemBox' >
      <h5>{productinfo.name}</h5>
      <img src={productinfo.image} alt={productinfo.name} />
      <p>Precio ${productinfo.price}</p>
      <button>Ver detalle del producto</button>
      <p>Stock disponible {productinfo.stock}</p>
    </Link>
  )
}
export default Item;