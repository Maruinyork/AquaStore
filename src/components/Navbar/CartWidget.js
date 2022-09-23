import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
const {totalItems} = useCartContext();
    return (
        <>
            <ShoppingBasketIcon color="light" />
            <span>{totalItems() || ''}</span>
        </>

    )
}
//si el total de productos da cero mostrara un string vacio
export default CartWidget;
