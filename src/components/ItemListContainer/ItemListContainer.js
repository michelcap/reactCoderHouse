import { useState, useEffect } from 'react';
import { getProductsByCategory, getProductsVehiculos } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProductsVehiculos

        asyncFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.error(error)
        })
    }, [categoryId]);

    const greeting = categoryId ?  `Filtrado: ${categoryId.toUpperCase()}` : 'Todos Los Productos'

    return (
        <div class='container text-center'>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;