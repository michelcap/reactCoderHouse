import Item from "../Item/Item";
import { useState, useEffect } from 'react';


const ItemList = ({ products }) => {

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
      }, [products]);    

    return (
        <div class='row justify-content-evenly'>
            {products.map(prod => <Item key={prod.id} products={prod}/>)}
        </div>
    );
};

export default ItemList;