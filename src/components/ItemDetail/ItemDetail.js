import React, {useState} from 'react';
import {useCartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom';
import '../ItemDetail/ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ product }) => {
  const{id, image, image2, image3, name, price, description, content, stock} = product
  
  const[toCart, setToCart] = useState(false);
  const[mainImage, setMainImage] = useState(image);
  
  const {addItem} = useCartContext(); //del cartContext solo quiero el addProduct
 

  const onAdd = (quantity)=>{
      setToCart(true);
      addItem(product, quantity);
  }

  return (
    <div className="container-details">
      <div className="details" key={id}>
        <div className="big-img">
          <img src={mainImage} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{name}</h2>
            <span>${price}</span>
          </div>
          <h5>{description}</h5>
          <p>{content}</p>
          <p>!Últimas {stock} unidades!</p>
          <b>Modelos disponibles:</b>
          <div className="thumb">
            <img onClick={()=>setMainImage(image)} src={image} alt=''  />
            <img onClick={()=>setMainImage(image2)} src={image2} alt='' />
            <img onClick={()=>setMainImage(image3)} src={image3} alt='' />
          </div>
          <p>Indique el modelo deseado al realizar la compra</p>
          <div className="counter">
            {toCart ? <Link to='/cart' className='toCart'> Finalizar compra </Link> : 
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/> } {/*Le paso por props el stock y la cantidad inicial*/} 
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
