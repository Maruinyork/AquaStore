import React, {useState} from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../ItemCount/ItemCount.css'


const ItemCount = ({stock, initial, onAdd}) => {

const[count, setCount] = useState(initial)

const add =()=>{
    if(stock >count){
        setCount(count + 1)
    }
}

const subtract =()=>{
    if(count >initial){
        setCount(count - 1)
    }
}

const addAmount = ()=>{ //la cantidad seleccionada por el usuario se guardara aqui
    onAdd(count)
}

  return (
    <> 
    <div className='containerButton'>
      <button className='button' onClick={subtract}><ArrowDropDownIcon/></button>
      <label>{count}</label>
      <button className='button' onClick={add}><ArrowDropUpIcon/></button> 
      <button className='addToCart' onClick={addAmount}>Agregar al carrito</button>      
    </div>
    </>
  )
}
export default ItemCount
