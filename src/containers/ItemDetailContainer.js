import React, {useState, useEffect} from 'react';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import { CircularProgress } from '@mui/material'
import '../containers/ItemDetailContainer.css';



const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false)
  const {itemId} = useParams();

  useEffect(()=>{ //Se hara una petición al montarse

      setTimeout(() => {
        setLoading(true)
      }, 500); 
  
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'items', itemId);
    getDoc(queryDoc)
      .then(res =>setProduct({id:res.id, ...res.data()})) //data es el nombre bajo el cual esta guardada en firestore
  },[itemId])

  return (
    <div>
    {!loading ? <div className='spinner'><CircularProgress /></div> :<ItemDetail product={product} />}
    </div>
   
  );
}

export default ItemDetailContainer;
