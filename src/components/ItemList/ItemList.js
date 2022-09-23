import React from 'react'
import Item from '../Item/Item'
import '../Item/Item.css'

const ItemList = ({ product }) => { //product viene de itemListContainer
  return (
    <div className="itemContainer">
      <div className="row">
        <h3>PRODUCTOS DESTACADOS</h3>
        {product.map((item) => (
          <Item key={item.id} productinfo={item} />
        ))}
      </div>
    </div>
  )
}

export default ItemList
