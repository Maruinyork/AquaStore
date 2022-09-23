import React, {useState, useContext} from 'react'
const CartContext = React.createContext([]);

export const useCartContext = ()=> useContext(CartContext) //directamente creo una funcion para no tener que importar todo el tiempo el useContext

const CartProvider = ({children}) => {
  const[cart, setCart] = useState([]); //almacenar productos
  
  const addItem = (item, quantity)=>{
    if(isInCart(item.id)){ //si esta en el carrito, con un map creamos un nuevo array. Todos los item que no sean iguales que se queden igual, y los que sean iguales que queden iguales pero que se le sume 1. 
        setCart(cart.map(product => {
            return product.id === item.id ? {...product, quantity: product.quantity + quantity } : product
        }));
    } else{
        setCart([...cart, {...item, quantity}]); //si no esta en el carrito creo un nuevo objeto con los datos que ya tenia del item mas la cantidad nueva
    }
  }

  console.log('carrito:', cart)

  const totalPrice = ()=>{
     return cart.reduce((prev, act) => prev + act.quantity * act.price, 0); //el valor inicial de prev es 0
  } //reduce recorre todo el array, por cada elemento ejecutara la funcion y el resultado se acumulara en prev.

  const totalItems = ()=>{
    return cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0); //valor inicial de acumulador es 0
  }

  const clear = ()=> setCart([]);//eliminar productos, lo seteo como un array vacio.
  
  const isInCart = (id)=> cart.find(product => product.id === id) ? true : false;
  const removeItem = (id)=> setCart(cart.filter(product=>product.id !==id)); //dejo pasar todos los productos que no tengan el id indicado (con ellos armo un array) y seteo asi el carrito.

    return (
    <CartContext.Provider value={{ 
        clear,
        isInCart,
        removeItem,
        addItem,
        totalPrice,
        totalItems,
        cart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
