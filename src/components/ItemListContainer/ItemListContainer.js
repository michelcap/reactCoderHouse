import { useState, useEffect } from 'react';

import { getProductsVehiculos } from '../../asyncMock';

import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsVehiculos().then((products) => { 
            setProducts(products); 
        });
    }, []);

    return (
        <>
            <ItemList products={products}/>
        </>
    );
};

export default ItemListContainer;