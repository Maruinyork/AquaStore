import React, { useEffect, useState } from 'react'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom' //usa los parametros de la URL


const ItemListContainer = ({ greeting }) => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 1000) 

   const querydb = getFirestore();
   const queryCollection = collection(querydb, 'items');
   if (categoryId) {
      const queryFilter = query(queryCollection, where('category', '==', categoryId))
      getDocs(queryFilter)
        .then(res => setProduct(res.docs.map(item =>({id: item.id, ...item.data() }))))
  
    } else {
      getDocs(queryCollection)
        .then(res => setProduct(res.docs.map(item =>({id: item.id, ...item.data() }))))
    }
  }, [categoryId]) //cada vez que cambia la categoria debe montarse el useEffect


  return (
    <div className="body">
      <div className="item-list">
        <h1>{greeting}</h1>
      </div>
      <div className="contain">
        <div className="text">
          <h3 className="newarrival">NEW ARRIVALS</h3>
          <span className="onlineorder">
            <h2>
              30% OFF <br />
              Compra Online
            </h2>
          </span>
        </div>
      </div>
      
      <div className="itemContainer">
        {!loading ? <div className='spinner'><CircularProgress /></div> : <ItemList product={product} />}
      </div>
    </div>
  )
}

export default ItemListContainer
